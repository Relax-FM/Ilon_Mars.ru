# from django.db import models
#
#
# # Create your models here.
#
# class Scientist(models.Model):
#     sc_id = models.AutoField(primary_key=True)
#     planet = models.CharField(max_length=100)
#     first_name = models.CharField(max_length=100)
#     last_name = models.CharField(max_length=100)
#     middle_name = models.CharField(max_length=100, blank=True, null=True)
#     position = models.CharField(max_length=100, blank=True, null=True)
#     username = models.CharField(max_length=100)
#     password = models.CharField(max_length=100)
#
#
# class ReceivedReport(models.Model):
#     rec_rep_id = models.BigAutoField(primary_key=True)
#     scientist = models.ForeignKey(Scientist, on_delete=models.CASCADE)
#     absolut_path = models.CharField(max_length=255)
#
#
# class SentReport(models.Model):
#     sent_rep_id = models.AutoField(primary_key=True)
#     scientist = models.ForeignKey(Scientist, on_delete=models.CASCADE)
#     character_count_max = models.IntegerField()
#     character_count_sent = models.IntegerField()
#     absolut_path = models.CharField(max_length=255)

