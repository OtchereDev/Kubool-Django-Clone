from messaging.tasks import deleteMessageTask
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import ParseError,NotFound
from rest_framework.permissions import AllowAny

from messaging.models import Message
from api.models import CustomUser

from datetime import timedelta


# for accepting new messages 
class NewMessage(APIView):
    permission_classes=[AllowAny,]

    def post(self,request,*args, **kwargs):
        
        try:
            user_code=kwargs['message']
            user=CustomUser.objects.get(share_code=user_code)
            message= request.data['message']

            new_message=Message.objects.create(content=message)

            user.messages.add(new_message)

            deleteMessageTask.apply_async((new_message.id,),eta=new_message.created+timedelta(minutes=5))
            
        except KeyError:
            raise ParseError(detail='You must provide a message in the key "message"')

        except CustomUser.DoesNotExist:
            raise NotFound(detail="No user with this user code exists")
            

        return Response({'status':'saved'})

