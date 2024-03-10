from django.contrib.auth import logout, login
from .serializers import *
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated


@api_view(['POST'])
def mylogin(request):
    user = get_object_or_404(User, username=request.data['username'])
    if not user.check_password(request.data['password']):
        return Response({"detail": "Not found."}, status=status.HTTP_404_NOT_FOUND)
    token, created = Token.objects.get_or_create(user=user)
    userserializer = UserSerializer(instance=user)
    scientist = Scientist.objects.get(user_id=userserializer.data['id'])
    scientistserializer = ScientistSerializer(scientist)
    login(request, user)
    return Response({"token": token.key, "user": scientistserializer.data}, status=status.HTTP_201_CREATED)


@api_view(['POST'])
def get_scientist(request):
    userdata = {"username": request.data['username'],
                "password": request.data['password'],
                "email": request.data['email']}
    userserializer = UserSerializer(data=userdata)
    if userserializer.is_valid():
        userserializer.save()
        user = User.objects.get(username=request.data['username'])
        user.set_password(request.data['password'])
        user.save()
        token = Token.objects.create(user=user)
        scientistdata = {"name": request.data['name'],
                         "surname": request.data['surname'],
                         "planet": request.data['planet'],
                         "user": userserializer.data['id']}
        scientistserializer = ScientistSerializer(data=scientistdata)
        if scientistserializer.is_valid():
            scientistserializer.save()
        else:
            return Response(scientistserializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response(userserializer.errors, status=status.HTTP_400_BAD_REQUEST)
    return Response({"token": token.key, "user": scientistserializer.data}, status=status.HTTP_201_CREATED)


@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def test_token(request):
    print(request.session.session_key)
    return Response("passed for {}".format(request.user.email))


test_path_to = r'C:\Users\relax_fm\Downloads\Telegram Desktop\periods.json'
import json
import requests as rq

def test_send(request):
    with open(test_path_to, 'r') as file:
        data = json.load(file)
    # print(data)
    url = 'http://127.0.0.1:8001/schedule/'

    # datalist = []
    # datalist.append(data)
    headers = {
        'Content-Type': 'application/json'
    }
    print(data)
    response = rq.post(url, headers=headers, data=json.dumps(data))  # TODO: Дописать обработчик расписания и отправки.

    if response.status_code == 200:
        print('Сообщение успешно отправлено на другой сервер')
    else:
        print('Возникла ошибка при отправке сообщения')
    return Response({}, status=status.HTTP_200_OK)

