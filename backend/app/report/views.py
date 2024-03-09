from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import Scientist, ReceivedReport


# Create your views here.


def index(request):
    return render(request, 'startpage.html')


@api_view(['POST'])
def get_report(request):
    if request.method == 'POST':
        data = request.data
        scientist_id = data.get('scientist_id')
        absolut_path = data.get('absolut_path')

        scientist = Scientist.objects.get(sc_id=scientist_id)

        ReceivedReport.objects.create(
            scientist=scientist,
            absolut_path=absolut_path
        )
        return HttpResponse("Report saved successfully")


