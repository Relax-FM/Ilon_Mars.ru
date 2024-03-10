from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class InReport(models.Model):
    user = models.ForeignKey(User, on_delete=models.PROTECT)
    scientist_name = models.CharField(max_length=25)
    title_name = models.CharField(max_length=128)
    absolute_path = models.CharField(max_length=128)
    max_size = models.IntegerField(default=0)
    received_size = models.IntegerField(default=0)

class OutReport(models.Model):
    user = models.ForeignKey(User, on_delete=models.PROTECT)
    scientist_name = models.CharField(max_length=25)
    title_name = models.CharField(max_length=128)
    absolute_path = models.CharField(max_length=128)
