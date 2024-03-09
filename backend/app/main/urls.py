from django.contrib import admin
from django.urls import path, re_path
from django.conf.urls import include
from auth.views import *

from report.views import get_report

from user.views import new_scientist

from auth.views import mylogin, test_token, mysignup


def basic(request):
    return "Ilon Mars"


urlpatterns = [
    path('admin/', admin.site.urls),
    #path('/', basic),
    re_path('api/login/', mylogin),
    re_path('api/signup/', mysignup),
    re_path('api/token/', test_token),
    path('report/get_report', get_report),
    path('user/new_scientist', new_scientist),
]
