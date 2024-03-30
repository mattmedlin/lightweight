from rest_framework import serializers
from .models import User, Workout, Equipment, Exercise, ExerciseDetail, MuscleGroup

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class WorkoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workout
        fields = '__all__'

class EquipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Equipment
        fields = '__all__'

class MuscleGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = MuscleGroup
        fields = '__all__'

class ExerciseSerializer(serializers.ModelSerializer):
    target_muscle_groups = MuscleGroupSerializer(many=True)
    secondary_target_muscle_groups = MuscleGroupSerializer(many=True)

    class Meta:
        model = Exercise
        fields = '__all__'

class ExerciseDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExerciseDetail
        fields = '__all__'
