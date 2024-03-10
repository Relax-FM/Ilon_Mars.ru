from rest_framework import serializers
from .models import InReport, OutReport
from django.contrib.auth.models import User


class InReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = InReport
        fields = ('user', 'scientist_name', 'title_name', 'absolute_path', 'max_size', 'received_size',)


class OutReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = OutReport
        fields = ['user', 'scientist_name', 'title_name', 'absolute_path', 'upload']

