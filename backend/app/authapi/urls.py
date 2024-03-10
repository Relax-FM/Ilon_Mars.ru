from django.urls import path
from .views import *


urlpatterns = [
<<<<<<< HEAD
    path('test/send/', test_send),
=======
>>>>>>> 44ac8c6d76c312735fa7ebfbbb0255dbdf519a97
    path('api/login/', mylogin),
    path('api/get_scientist/', get_scientist),
    path('api/token/', test_token),
]