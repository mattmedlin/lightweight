from rest_framework import generics
from .models import UserDetails, Workout, Equipment, Exercise, ExerciseDetail, MuscleGroup
from .serializers import (
    UserDetailsSerializer,
    WorkoutSerializer,
    EquipmentSerializer,
    ExerciseSerializer,
    ExerciseDetailSerializer,
    MuscleGroupSerializer
)

class UserDetailsListCreateAPIView(generics.ListCreateAPIView):
    queryset = UserDetails.objects.all()
    serializer_class = UserDetailsSerializer

class UserDetailsAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserDetails.objects.all()
    serializer_class = UserDetailsSerializer

class WorkoutListCreateAPIView(generics.ListCreateAPIView):
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer

class WorkoutDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer

class EquipmentListCreateAPIView(generics.ListCreateAPIView):
    queryset = Equipment.objects.all()
    serializer_class = EquipmentSerializer

class EquipmentDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Equipment.objects.all()
    serializer_class = EquipmentSerializer

class MuscleGroupListCreateAPIView(generics.ListCreateAPIView):
    queryset = MuscleGroup.objects.all()
    serializer_class = MuscleGroupSerializer

class MuscleGroupDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = MuscleGroup.objects.all()
    serializer_class = MuscleGroupSerializer

class ExerciseListCreateAPIView(generics.ListCreateAPIView):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer

class ExerciseDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer

class ExerciseDetailListCreateAPIView(generics.ListCreateAPIView):
    queryset = ExerciseDetail.objects.all()
    serializer_class = ExerciseDetailSerializer

class ExerciseDetailDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ExerciseDetail.objects.all()
    serializer_class = ExerciseDetailSerializer
