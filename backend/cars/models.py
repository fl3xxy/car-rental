from django.db import models

# Create your models here.
class Car(models.Model):
    brand = models.CharField(max_length=200)
    model = models.CharField(max_length=200)
    year = models.DecimalField(max_digits=5, decimal_places=0, default=0)
    cost = models.DecimalField(max_digits=5, decimal_places=2)
    max_speed = models.DecimalField(max_digits=5, decimal_places=0, default=0)
    type = models.CharField(max_length=200)
    passengers = models.DecimalField(max_digits=5, decimal_places=0)
    doors = models.DecimalField(max_digits=5, decimal_places=0)
    gearbox = models.CharField(max_length=200)

    def __str__(self):
        return f'{self.brand} | {self.model}'