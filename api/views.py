from api.models import CustomUser
from .serializers import MessageSerializer

from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.exceptions import NotFound, ParseError
from rest_framework.response import Response
from rest_framework import serializers

from django.core.exceptions import ValidationError
from django.contrib.auth.password_validation import  validate_password
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
            raise ParseError({"field_not_provided":["provide a valid user name",
                             "provide a valid password"]})

        except ValidationError as e:
            raise ParseError({'validation_error':list(e)})

        except IntegrityError:
            raise serializers.ValidationError({'user_exist':["user with this user name already exists"]})
        
        except Exception as ex:
            raise serializers.ValidationError({'unknown_error':['cant completed this']})


class ChangePassword(APIView):
    """ For Changing user password """
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


class DeleteUser(APIView):
    """ For deleting User account"""
    permission_classes=[IsAuthenticated]

    def post(self,request,*args, **kwargs):
        user=request.user 
        user.delete()

        return Response({'status':"user deleted"})


class CheckUser(APIView):
    """ view for verifying if user or not """
    def post(self,request,*args, **kwargs):
        share_code=kwargs['share_code']
        try:
            user=CustomUser.objects.get(share_code=share_code)
        except CustomUser.DoesNotExist:
            raise NotFound(detail="Sorry not user with this user code exits")
        except KeyError:
            raise ParseError({"detail":"provide a user share_code"})
        
        return Response({'status':'user exists','username':user.username})


class AllAnonMessages(APIView):
    """ Return all Anonymous messages """
    permission_classes=[IsAuthenticated,]
    def get(self,request,*args, **kwargs):
        user=request.user
        messages=MessageSerializer(user.messages.all(),many=True)

        return Response({'messages':messages.data})


class GetUser(APIView):
    permission_classes=[IsAuthenticated,]
    def post(self,request,*args, **kwargs):
        user=request.user 
        return Response({'user':[user.username,user.share_code]})

        