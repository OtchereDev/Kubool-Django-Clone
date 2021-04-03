from django.urls import path
from .views import NewMessage

app_name='messaging'

urlpatterns = [
    path('<str:message>/',NewMessage.as_view())
]
