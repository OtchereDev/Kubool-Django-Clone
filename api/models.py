from messaging.models import Message
from django.contrib.auth.models import AbstractUser
from django.db import models
from random import choices
from string import ascii_letters,digits


class CustomUser(AbstractUser):
    share_code=models.CharField(max_length=12)
    messages=models.ManyToManyField(Message,blank=True)

    def save(self,*args, **kwargs):

        while True:
            first_part_code="".join(choices(ascii_letters,k=5))
            second_part_code="".join(choices(digits,k=4))
            code=f"{first_part_code}{second_part_code}"
            if not CustomUser.objects.filter(share_code=code).exists():
                break

        self.share_code=code 
        return super().save(*args, **kwargs)
        


