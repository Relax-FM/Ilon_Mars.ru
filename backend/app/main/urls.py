from django.contrib import admin
from django.urls import path
from django.conf.urls import include


def basic(request):
    return "Ilon Mars"


urlpatterns = [
    path('admin/', admin.site.urls),
    path('/', basic),
]
