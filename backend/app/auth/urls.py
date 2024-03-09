from django.urls import path

from .views import *

urlpatterns = [
    path('api/login/', mylogin),
    path('api/signup/', mysignup),
    path('api/token/', test_token),
]