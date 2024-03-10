from django.contrib import admin
from django.urls import path, re_path
from django.urls import include


from django.conf.urls import include
from django.conf.urls import include
from django.urls import include
from report.views import get_report

from authapi.views import test_token


def basic(request):
    return "Ilon Mars"


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('authapi.urls')),
    path('', include('schedule.urls')),
    path('api/report/get_report', get_report),
]
