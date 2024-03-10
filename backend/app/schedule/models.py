from django.db import models

# Create your models here.

class Schedule(models.Model):
    speed = models.FloatField()
    start_time = models.DateTimeField(db_column='from')  # 'from' - зарезервированное слово, поэтому используем другое имя для поля
    end_time = models.DateTimeField(db_column='to')      # 'to' - также зарезервированное слово, используем другое имя для поля
