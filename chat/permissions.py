from rest_framework import permissions
from .models import Membership,Room
class IsOwnerOrReadOnly(permissions.BasePermission):
    def has_object_permission(self,request,view,obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        
        return obj.author == request.user


class RoomOwnerOrReadOnly(permissions.BasePermission):
    message = 'You havn\'t joined this Room'
    def has_object_permission(self,request,view,obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        
        members = Membership.objects.filter(room=obj,is_Admin=True)
        for member in members:
            if member.person == request.user:
                return True
        return False