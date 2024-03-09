from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from main.models import Scientist, ReceivedReport


# Create your views here.


def index(request):
    return render(request, 'startpage.html')

@api_view(['POST'])
def get_report(request):
    if request.method == 'POST':
        scientist_id = request.GET.get('scientist_id')
        absolut_path = request.GET.get('absolut_path')
        scientist = Scientist.objects.get(sc_id=scientist_id)
        ReceivedReport.objects.create(
            scientist=scientist,
            absolut_path=absolut_path
        )
        return HttpResponse("Report saved successfully")


