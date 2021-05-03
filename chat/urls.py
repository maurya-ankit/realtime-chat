from django.urls import path

from . import views

urlpatterns = [
    path("room/",views.RoomList.as_view(),name="room-list"),
    path("room/<str:name>",views.RoomDetail.as_view(),name="room-detail"),
    path("membership/",views.MembershipList.as_view(),name="membership-list"),
    path('messages/',views.get_chat),
]