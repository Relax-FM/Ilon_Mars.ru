from django.contrib import admin
from django.urls import path, re_path
<<<<<<< HEAD
from django.urls import include


from django.conf.urls import include
=======
from django.conf.urls import include
from django.urls import include


from report.views import get_report

from user.views import new_scientist

from auth.views import mylogin, test_token, mysignup


def basic(request):
    return "Ilon Mars"
>>>>>>> 44ac8c6d76c312735fa7ebfbbb0255dbdf519a97


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('authapi.urls')),
<<<<<<< HEAD
    path('', include('authapi.urls')),
=======
>>>>>>> 44ac8c6d76c312735fa7ebfbbb0255dbdf519a97
    path('', include('schedule.urls')),
    path('', basic),
    #path('/', basic),
    re_path('api/login/', mylogin),
    re_path('api/signup/', mysignup),
    re_path('api/token/', test_token),
    path('api/report/get_report', get_report),
    path('api/user/new_scientist', new_scientist),
]
