from django.urls import path
from . import views

urlpatterns = [
    path('cars/', views.getCar),
]