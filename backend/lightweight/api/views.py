from rest_framework import generics
from .models import User, Workout, Equipment, Exercise, ExerciseDetail, MuscleGroup
from .serializers import (
    UserSerializer,
    WorkoutSerializer,
    EquipmentSerializer,
    ExerciseSerializer,
    ExerciseDetailSerializer,
    MuscleGroupSerializer
)

class UserListCreateAPIView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

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
