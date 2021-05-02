import json
from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync
from channels.db import database_sync_to_async
import datetime
from .models import Membership,Room

# @database_sync_to_async
def is_member(user,room):
    try:
        memberobj = Membership.objects.filter(person__username=user,room__name=room) 
        return bool(len(memberobj))
    except :
        return False

def is_public(room):
    try:
        roomobj = Room.objects.filter(name=room)[0]
        return roomobj.public
    except :
        return False

class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_name = self.room_name.replace(' ', '_')
        self.room_group_name = 'chat_%s' % self.room_name
        self.user = self.scope["user"]
        # print(self.user,self.room_name)
        # print(is_member(self.user,self.room_name))
        # Join room group
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )
        if is_member(self.user,self.room_name) or is_public(self.room_name):
            self.accept()
        else:
            self.close()

    def disconnect(self, close_code):
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        utc_time = datetime.datetime.now(datetime.timezone.utc)
        utc_time = utc_time.isoformat()

        # self.send(text_data=json.dumps({
        #     'message': message
        # }))
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': 'chat_message',
                'user':str(self.user),
                'message': message,
                'utc_time': utc_time,
            }
        )

    def chat_message(self, event):
        """
        Receive a broadcast message and send it over a websocket
        """
        
        message = event['message']
        utc_time = event['utc_time']
        user = event['user']

        # Send message to WebSocket
        self.send(text_data=json.dumps({
            'message': message,
            'utc_time': utc_time,
            'user':user,
        }))