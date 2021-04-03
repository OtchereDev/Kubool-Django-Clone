from messaging.models import Message
from celery import shared_task
from kubool_clone.celery import app


@app.task(name="delete_message_task")
def deleteMessageTask(id):
    message=Message.objects.get(id=id)
    message.delete()
