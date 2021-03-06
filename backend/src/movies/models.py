from django.db import models

# Create your models here.
class Movie(models.Model):
    title = models.CharField(max_length=120)
    url = models.CharField(max_length=120)
    watched = models.BooleanField()

    def __str__(self):
        return self.title