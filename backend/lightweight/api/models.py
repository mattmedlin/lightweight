from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    sex = models.CharField(max_length=10)
    weight = models.FloatField()
    height = models.FloatField()

class Workout(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField()
    duration = models.IntegerField()

class Equipment(models.Model):
    name = models.CharField(max_length=100)

class MuscleGroup(models.Model):
    name = models.CharField(max_length=100)
    type = models.IntegerField()
    recovery_percentage = models.IntegerField()

class Exercise(models.Model):
    name = models.CharField(max_length=100)
    equipment = models.ForeignKey(Equipment, on_delete=models.CASCADE)
    target_muscle_groups = models.ManyToManyField(MuscleGroup, related_name='target_exercises')
    secondary_target_muscle_groups = models.ManyToManyField(MuscleGroup, related_name='secondary_target_exercises')

class ExerciseDetail(models.Model):
    workout = models.ForeignKey(Workout, on_delete=models.CASCADE)
    exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE)
    sets = models.IntegerField()
    reps = models.IntegerField()
    weight = models.FloatField()
    distance = models.FloatField()
