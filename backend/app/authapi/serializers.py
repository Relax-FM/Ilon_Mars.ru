from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Scientist


class ScientistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Scientist
        fields = ['user', 'name', 'surname', 'planet']


# Умалат - чурка
class UserSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = User
        fields = ['id', 'username', 'password', 'email']
