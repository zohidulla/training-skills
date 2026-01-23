from django.shortcuts import render
from django.http import HttpResponse
from .models import Course, Category

def index(request):
    courses = Course.objects.all()
    return HttpResponse(''.join([str(course) + '<br>' for course in courses]))