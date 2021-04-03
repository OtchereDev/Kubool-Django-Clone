from django.core.exceptions import ValidationError
from rest_framework.permissions import IsAuthenticated
from api.models import CustomUser
from .serializers import MessageSerializer

from rest_framework.views import APIView
from rest_framework.exceptions import NotFound, ParseError
from rest_framework.response import Response

from django.contrib.auth.password_validation import validate_password


class CheckUser(APIView):
    """ view for verifying if user or not """
    def post(self,request,*args, **kwargs):
        share_code=kwargs['share_code']
        try:
            user=CustomUser.objects.get(share_code=share_code)
        except CustomUser.DoesNotExist:
            raise NotFound(detail="Sorry not user with this user code exits")
        
        return Response({'status':'user exists'})



class AllAnonMessages(APIView):
    """ Return all Anonymous messages """
    permission_classes=[IsAuthenticated,]
    def get(self,request,*args, **kwargs):
        user=request.user
        messages=MessageSerializer(user.messages.all(),many=True)

        return Response({'messages':messages.data})
