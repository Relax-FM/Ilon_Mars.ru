from .models import Schedule
from .serializer import ScheduleSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import json
import requests as rq

sending_url = 'http://127.0.0.1:8000/'
headers = {'Content-Type': 'application/json'}


@api_view(['GET', 'POST'])
def schedules(request):
    if request.method == 'GET':
        schedules = Schedule.objects.all()
        serializer = ScheduleSerializer(schedules, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        requests = request.data
        for req in requests:
            req['start_time'] = req.pop('from')
            req['end_time'] = req.pop('to')

        for req in requests:
            serializer = ScheduleSerializer(data=req)
            if serializer.is_valid():
                serializer.save()
            else:
                print('Bad request')
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        url = sending_url + 'schedule/'
        response = rq.post(url, headers=headers, data=json.dumps(requests))  # TODO: Дописать обработчик расписания и отправки.
        if response.status_code == 201:
            print('Сообщение успешно отправлено на другой сервер')
        else:
            print('Возникла ошибка при отправке сообщения')
        return Response(serializer.data, status=status.HTTP_201_CREATED)
