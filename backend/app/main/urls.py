from django.contrib import admin
from django.urls import path, re_path
<<<<<<< HEAD
from django.urls import include


from django.conf.urls import include
=======
from django.conf.urls import include
from django.urls import include


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
]
