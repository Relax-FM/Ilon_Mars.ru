from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from django.urls import include


from django.conf.urls import include
from django.conf.urls import include
from django.urls import include
from report.views import get_report
from user.views import new_scientist
from authapi.views import *

from authapi.views import test_token


def basic(request):
    return "Ilon Mars"


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('authapi.urls')),
    path('', include('authapi.urls')),
    path('', include('schedule.urls')),
    #path('/', basic),
    #re_path('api/login/', mylogin),
    #re_path('api/signup/', mysignup),
    re_path('api/token/', test_token),
    path('api/report/get_report', get_report),
    path('api/user/new_scientist', new_scientist),
]
