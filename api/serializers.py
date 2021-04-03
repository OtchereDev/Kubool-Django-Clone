from rest_framework import serializers
from messaging.models import Message

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model=Message
        fields=['content','created']