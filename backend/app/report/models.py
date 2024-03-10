from django.db import models


class ReceivedReport(models.Model):
    rec_rep_id = models.BigAutoField(primary_key=True)
    scientist = models.ForeignKey(Scientist, on_delete=models.CASCADE)
    absolut_path = models.CharField(max_length=255)


class SentReport(models.Model):
    sent_rep_id = models.AutoField(primary_key=True)
    scientist = models.ForeignKey(Scientist, on_delete=models.CASCADE)
    character_count_max = models.IntegerField()
    character_count_sent = models.IntegerField()
    absolut_path = models.CharField(max_length=255)
