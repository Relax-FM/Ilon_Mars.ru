import datetime
import pytz
import time

from django.conf import settings
from django.utils import timezone
from main.views import timeWindow

from django.apps import AppConfig
from django.db import connection

import sched
scheduler = sched.scheduler(time.time, time.sleep)

def isWindowEnded():
    current_time = timezone.now()
    if current_time >= timeWindow['now']['to']:
        timeWindow['now'] = 'empty'
        return True
    return False

def isWindowStarted():
    current_time = timezone.now()
    if current_time >= timeWindow['next']['from']:
        timeWindow['now'] = timeWindow['next']
        getNewTime()
        # timeWindow['next'] = тут должен быть парсинг даты
        # scheduler.enter((timeWindow['now']['to']-current_time).total_seconds(), 1, isWindowEnded, ())
        # scheduler.enter((timeWindow['next']['from']-current_time).total_seconds(), 1, isWindowStarted, ())
        return True
    return False

# def pullInShedule():
#     # scheduler.enter()

def isWindowNow(start, end):
    current_time = datetime.datetime.now(pytz.timezone(settings.TIME_ZONE))
    return start <= current_time <= end

def getNewTime():
    current_datetime = timezone.now()
    print(current_datetime)
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM schedule_schedule WHERE \"from\" > %s OR %s < \"to\" ORDER BY \"from\" ASC", [current_datetime,current_datetime])
        rows = cursor.fetchall()
        cnt = 0 
        for row in rows:
            if cnt < 2:
                id, speed, dt_start, dt_end = row

                servertz_dt_start = dt_start.astimezone(pytz.timezone(settings.TIME_ZONE))
                servertz_dt_end = dt_end.astimezone(pytz.timezone(settings.TIME_ZONE))

                if (isWindowNow(servertz_dt_start,servertz_dt_end)):
                    timeWindow['now']={'id':id,'speed':speed,'from':servertz_dt_start,'to':servertz_dt_end}
                elif((timeWindow['now'] == 'empty' and cnt !=1) or (timeWindow['now'] != 'empty')): 
                    timeWindow['next'] = {'id':id,'speed':speed,'from':servertz_dt_start,'to':servertz_dt_end}
                elif timeWindow['next']['id'] == timeWindow['now']['id']:
                    timeWindow['next'] = 'empty'
                cnt += 1
                # print(servertz_dt_start.strftime("%Y-%m-%d %H:%M:%S %Z"))
                # print(servertz_dt_end.strftime("%Y-%m-%d %H:%M:%S %Z"))
            else:
                break
        if (timeWindow['now'] != 'empty'):
            scheduler.enter((timeWindow['now']['to'] - current_datetime).total_seconds(),1,isWindowEnded, ())
        scheduler.enter((timeWindow['next']['from'] - current_datetime).total_seconds(),1,isWindowStarted ,())
    print(timeWindow)

class ScheduleConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "schedule"
    verbose_name = "My Application"
    def ready(self):
        getNewTime();
        # scheduler.enter()
        scheduler.run()
        pass