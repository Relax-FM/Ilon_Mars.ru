from django.urls import re_path

from .views import *

urlpatterns = [
    re_path('api/login/', mylogin),
    re_path('api/signup/', mysignup),
    re_path('api/token/', test_token),
]