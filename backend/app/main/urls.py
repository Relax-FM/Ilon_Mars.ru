from django.contrib import admin
from django.urls import path
from django.conf.urls import include


from report.views import get_report

from user.views import new_scientist


def basic(request):
    return "Ilon Mars"


urlpatterns = [
    path('admin/', admin.site.urls),
    path('/', basic),
    path('report/get_report', get_report),
    path('user/new_scientist', new_scientist)
]


