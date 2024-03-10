from django.contrib.auth import logout, login
from .serializers import *
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404


# TODO: Нахуярить логику работы с отчетами
@api_view(['POST'])
def get_report(request):
    print('tut')
    # print(request.FILES.data)
    formdata = {
        'user': 1,
        'scientist_name': "Andrey",
        'title_name': "text",
        'absolute_path': "path",
        'max_size': 500,
        'received_size': 0
    }

    print('tut3')
    form = InReportSerializer(formdata, request.FILES)
    print('tut2')
    if form.is_valid():
        form.save()
    else:
        print("fuck")
        return Response({"sosi hui": request.FILES}, status=status.HTTP_400_BAD_REQUEST)
    return Response({"ne sosi hui": 12356789}, status=status.HTTP_201_CREATED)



@api_view(['POST'])
def send_report(request):
    pass
#
