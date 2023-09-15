from rest_framework.response import Response
from rest_framework.decorators import api_view
from cars.models import Car
from .serializers import CarSerializer


@api_view(['GET'])
def getCar(request):
    cars = Car.objects.all()
    serializer = CarSerializer(cars, many=True)
    return Response(serializer.data)

