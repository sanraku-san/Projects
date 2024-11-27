from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Appointment
from .serializers import AppointmentSerializer

class AppointmentListView(APIView):
    def get(self, request):
        # Retrieve all appointments
        appointments = Appointment.objects.all()
        serializer = AppointmentSerializer(appointments, many=True)
        return Response(serializer.data)

    def post(self, request):
        # Create a new appointment
        serializer = AppointmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save() 
            return Response(serializer.data, status=status.HTTP_201_CREATED)  
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

class AppointmentDetailView(APIView):
    def get_object(self, pk):
        return get_object_or_404(Appointment, pk=pk)

    def put(self, request, pk):
        appointment = self.get_object(pk)
        serializer = AppointmentSerializer(appointment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        appointment = self.get_object(pk)
        appointment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
