from rest_framework import serializers
from .models import Room,Membership,Chat
class RoomSerializer(serializers.ModelSerializer):
    total_members = serializers.ReadOnlyField()
    admin = serializers.ReadOnlyField()

    class Meta:
        model = Room
        fields=[
            'id',
            'name',
            'public',
            'admin',
            'total_members'
        ]

class MembershipSerializer(serializers.ModelSerializer):
    person = serializers.StringRelatedField()
    room = serializers.StringRelatedField()
    
    class Meta:
        model = Membership
        fields = [
            'id',
            'room',
            'person',
        ]

class ChatSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField()

    class Meta:
        model = Chat
        fields = [
            'message',
            'utc_time',
            'user'
        ]