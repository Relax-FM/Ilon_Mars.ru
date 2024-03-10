from django.contrib.auth import logout, login
from .serializers import *
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404


# TODO: Нахуярить логику работы с отчетами

def get_report():
    pass


def send_report():
    pass