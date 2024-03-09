from django.contrib import admin
from django.urls import path, re_path
from django.conf.urls import include
from django.urls import include
from auth.views import *


def basic(request):
    return "Ilon Mars"


urlpatterns = [
    path('admin/', admin.site.urls),
    path('test/send/', test_send),
    re_path('api/login/', mylogin),
    re_path('api/signup/', mysignup),
    re_path('api/token/', test_token),
    path('', include('schedule.urls')),
    path('', basic),
]
