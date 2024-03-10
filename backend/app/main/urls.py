from django.contrib import admin
from django.urls import path, re_path
from django.urls import include


def basic(request):
    return "Ilon Mars"


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('authapi.urls')),
    path('', include('schedule.urls')),
    path('', basic),
]
