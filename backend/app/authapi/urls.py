from django.urls import path
from .views import *


urlpatterns = [
    path('api/login/', mylogin),
    path('api/get_scientist/', get_scientist),
    path('api/token/', test_token),
    path('test/files/', test_files),
]