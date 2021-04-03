from django.core.exceptions import ValidationError
from rest_framework.permissions import IsAuthenticated
from api.models import CustomUser
from .serializers import MessageSerializer

from rest_framework.views import APIView
from rest_framework.exceptions import NotFound, ParseError
from rest_framework.response import Response
from rest_framework import serializers

from django.contrib.auth.password_validation import password_changed, validate_password
from django.db.utils import IntegrityError

class SignUp(APIView):
    ''' For Sign up user '''
    def post(self,request,*args, **kwargs):
        try:
            username=request.data['username']
            password=request.data['password']

            validate_password(password=password)

            user = CustomUser.objects.create_user(username=username,password=password)

            return Response({'status':'user created'})

        except KeyError:
            raise ParseError({"username":"provide a valid user name",
                             "password":"provide a valid password"})

        except ValidationError as e:
            raise ParseError({'validation_error':list(e)})

        except IntegrityError:
            raise serializers.ValidationError({'username':"user with this user name already exists"})
        
        except Exception as ex:
            raise serializers.ValidationError('cant completed this')


class ChangePassword(APIView):
    permission_classes=[IsAuthenticated]
    def post(self,request,*args, **kwargs):
        user=request.user 
        try:
            password=request.data['password']

            validate_password(password)

            user.set_password(password)
            user.save()

            return Response({'status':'user updated'})

        except KeyError:
            raise ParseError({"password":"provide a valid password"})

        except ValidationError as e:
            raise ParseError({'validation_error':list(e)})


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
