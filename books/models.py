from django.db import models

# Create your models here.
class Author(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.CharField(max_length=200)
    nationality = models.CharField(max_length=40)
    
    def __str__(self):
        return self.name