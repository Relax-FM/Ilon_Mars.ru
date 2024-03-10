import datetime
import pytz

from django.conf import settings
from django.utils import timezone
from main.views import timeWindow

from django.apps import AppConfig
from django.db import connection


def isWindowNow(start, end):
    current_time = datetime.datetime.now(pytz.timezone(settings.TIME_ZONE))
    return start <= current_time <= end

class ScheduleConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "schedule"
    verbose_name = "My Application"
    def ready(self):
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
                    elif((timeWindow['now'] == 'empty' and cnt !=1)or(timeWindow['now'] != 'empty')): 
                        timeWindow['next'] = {'id':id,'speed':speed,'from':servertz_dt_start,'to':servertz_dt_end}
                    
                    cnt += 1
                    # print(servertz_dt_start.strftime("%Y-%m-%d %H:%M:%S %Z"))
                    # print(servertz_dt_end.strftime("%Y-%m-%d %H:%M:%S %Z"))
                else:
                    break
        print(timeWindow)
        pass 