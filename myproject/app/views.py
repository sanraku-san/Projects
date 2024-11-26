from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Appointment
from .serializers import AppointmentSerializer
# Create your views here.

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
            serializer.save()  # Save the new appointment to the database
            return Response(serializer.data, status=status.HTTP_201_CREATED)  # Return the created appointment with a 201 status
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  # Return validation errors with a 400 status

