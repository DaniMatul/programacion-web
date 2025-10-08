from django.db import models

# Create your models here.
class Author(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.CharField(max_length=200)
    nationality = models.CharField(max_length=40)
    
    def __str__(self):
        return self.name

class Genres(models.Model):
    genre = models.CharField(max_length=50, unique=True)
    description = models.CharField(max_length=200)
    
    def __str__(self):
        return self.genre


class Book(models.Model):
    title = models.CharField(max_length=50, unique=True)
    description = models.CharField(max_length=200)
    author = models.ForeignKey(Author, on_delete=models.CASCADE, related_name='books')
    genres = models.ManyToManyField(Genres, related_name='books_genre')
    def __str__(self):
        return self.title