from django.db import models
from django.contrib.auth.models import User


def user_directory_path_in(instance, filename):
    # путь, куда будет осуществлена загрузка MEDIA_ROOT/user_<id>/<filename>
    return 'in/{0}/{1}'.format(instance.id, filename)


def user_directory_path_out(instance, filename):
    # путь, куда будет осуществлена загрузка MEDIA_ROOT/user_<id>/<filename>
    return 'out/{0}/{1}'.format(instance.id, filename)


class InReport(models.Model):
    user = models.ForeignKey(User, on_delete=models.PROTECT)
    scientist_name = models.CharField(max_length=25)
    title_name = models.CharField(max_length=128)
    absolute_path = models.CharField(max_length=128)
    max_size = models.IntegerField(default=0)
    received_size = models.IntegerField(default=0)
    upload = models.FileField(upload_to=user_directory_path_in, default='')

class OutReport(models.Model):
    user = models.ForeignKey(User, on_delete=models.PROTECT)
    scientist_name = models.CharField(max_length=25)
    title_name = models.CharField(max_length=128)
    absolute_path = models.CharField(max_length=128)
    upload = models.FileField(upload_to=user_directory_path_out, default='')
