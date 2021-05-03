from django.shortcuts import render
from rest_framework import generics
from django.contrib.auth.models import User
from .models import Room,Membership,Chat
from . import serializers
from rest_framework.response import Response
from  .permissions import IsOwnerOrReadOnly,RoomOwnerOrReadOnly
from rest_framework import permissions
from rest_framework.exceptions import ValidationError,ParseError
from rest_framework.decorators import api_view

class RoomList(generics.ListCreateAPIView):
    serializer_class = serializers.RoomSerializer
    permission_classes = [
        permissions.IsAuthenticated,
        RoomOwnerOrReadOnly,
        ]

    def perform_create(self,serializer):
        obj = serializer.save()
        Membership(person=self.request.user,is_Admin=True,room=obj).save()

    def get_queryset(self):
        return self.request.user.room_set.all()


class RoomDetail(generics.RetrieveUpdateDestroyAPIView):
    
    serializer_class = serializers.RoomSerializer
    permission_classes = [permissions.IsAuthenticated,RoomOwnerOrReadOnly]
    lookup_field='name'
    def get_queryset(self):
        return self.request.user.room_set.all()



class MembershipList(generics.ListCreateAPIView):
    serializer_class = serializers.MembershipSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self,serializer):
        # print(serializer)
        person= self.request.data['person']
        room=self.request.data['room']

        obj = serializer.save(person=User.objects.get(username=person),room=Room.objects.get(name=room))

    def get_queryset(self):
        queryset = Membership.objects.all()
        room = self.request.query_params.get('room', None)
        if room is not None:
            queryset = queryset.filter(room__name=room)
        else:
            queryset = Membership.objects.none()
            raise ParseError(detail="room id not available")
        
        status = False
        for q in queryset:
            if q.person==self.request.user:
                status = True
                break

        if status:
            return queryset
        else:
            raise ParseError(detail="You are not a member")

@api_view(['GET'])
def get_chat(request):
    if request.method == 'GET':
        room = request.query_params.get('room', None)
        chat = Chat.objects.filter(room=Room.objects.get(name=room))
        serializer = serializers.ChatSerializer(chat, many=True)
        return Response(serializer.data)
