from django.contrib import admin

# Register your models here.
from . import models

admin.site.register(models.Membership)
admin.site.register(models.Room)
