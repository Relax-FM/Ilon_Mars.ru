from django.db import models
from django.contrib.auth.models import User


class Scientist(models.Model):
    name = models.CharField(max_length=25)
    surname = models.CharField(max_length=25)
    planet = models.CharField(max_length=25, default='Earth')
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)