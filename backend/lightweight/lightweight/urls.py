"""
URL configuration for lightweight project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from ..api.views import (
    UserListCreateAPIView,
    UserDetailAPIView,
    WorkoutListCreateAPIView,
    WorkoutDetailAPIView,
    EquipmentListCreateAPIView,
    EquipmentDetailAPIView,
    ExerciseListCreateAPIView,
    ExerciseDetailAPIView,
    ExerciseDetailListCreateAPIView,
    ExerciseDetailDetailAPIView,
    MuscleGroupListCreateAPIView,
    MuscleGroupDetailAPIView
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/', UserListCreateAPIView.as_view(), name='user-list'),
    path('users/<int:pk>/', UserDetailAPIView.as_view(), name='user-detail'),

    path('workouts/', WorkoutListCreateAPIView.as_view(), name='workout-list'),
    path('workouts/<int:pk>/', WorkoutDetailAPIView.as_view(), name='workout-detail'),

    path('equipment/', EquipmentListCreateAPIView.as_view(), name='equipment-list'),
    path('equipment/<int:pk>/', EquipmentDetailAPIView.as_view(), name='equipment-detail'),

    path('exercises/', ExerciseListCreateAPIView.as_view(), name='exercise-list'),
    path('exercises/<int:pk>/', ExerciseDetailAPIView.as_view(), name='exercise-detail'),

    path('exercise-details/', ExerciseDetailListCreateAPIView.as_view(), name='exercise-detail-list'),
    path('exercise-details/<int:pk>/', ExerciseDetailDetailAPIView.as_view(), name='exercise-detail-detail'),

    path('muscle-groups/', MuscleGroupListCreateAPIView.as_view(), name='muscle-group-list'),
    path('muscle-groups/<int:pk>/', MuscleGroupDetailAPIView.as_view(), name='muscle-group-detail'),
]
