from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def new_scientist(request):
    print(request)
    return render(request, 'user.html')