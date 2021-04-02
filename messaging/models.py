from django.db import models
from django.utils.timezone import now
from datetime import timedelta

currentTime=now()

class Message(models.Model):
    content=models.TextField()
    created=models.DateTimeField(auto_now_add=True)

    def clearTime(self):
        deadline=self.created + timedelta(hours=23)
        return currentTime > deadline

