from django.db import models
from django.contrib.auth.models import User

class TimeStampMixin(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class Room(TimeStampMixin):
    public  = models.BooleanField(default=False)
    name = models.CharField(max_length=15,unique=True)
    members = models.ManyToManyField(User,through="Membership")

    def __str__(self):
        return self.name
    
    @property
    def admin(self):
        admin = Membership.objects.filter(room=self,is_Admin=True).first().person.username
        return admin
    @property
    def total_members(self):
        return Membership.objects.filter(room=self).count()
    
class Membership(TimeStampMixin):
    person = models.ForeignKey(User, on_delete = models.CASCADE,related_name="person")
    is_Admin = models.BooleanField(default=False)
    room = models.ForeignKey(Room,on_delete=models.CASCADE,related_name="room")

    class Meta:
        unique_together = ['person','room']

    def __str__(self):
        return f"{self.person.username} in {self.room.name}"


class Chat(models.Model):
    room = models.ForeignKey(Room,on_delete=models.CASCADE,related_name="chatroom")
    message = models.TextField()
    utc_time = models.DateTimeField()
    chatuser = models.ForeignKey(User, on_delete = models.CASCADE,related_name="chatperson")


    def __str__(self):
        return self.message

    @property
    def user(self):
        return self.chatuser.username
