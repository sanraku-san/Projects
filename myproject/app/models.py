from django.db import models


#import your models here


class Appointment(models.Model):
    DESCRIPTION_CHOICES = [
        ('consultation', 'Consultation'),
        ('follow_up', 'Follow-up'),
        ('check_up', 'Check-up'),
        ('other', 'Other'),
    ]

    name = models.CharField(max_length=100)  
    date = models.DateField()                
    time = models.TimeField()               
    description = models.CharField(max_length=20, choices=DESCRIPTION_CHOICES)

    def __str__(self):
        return f"{self.name} - {self.get_description_display()} on {self.date} at {self.time}"