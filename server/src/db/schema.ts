import { InferSelectModel, relations } from "drizzle-orm";
import {
  pgTable,
  serial,
  text,
  date,
  integer,
  doublePrecision,
} from "drizzle-orm/pg-core";

//User
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  sex: text("sex").notNull(),
  weight: doublePrecision("weight").notNull(),
  height: doublePrecision("height").notNull(),
});

export const userRelations = relations(users, ({ many }) => ({
  workouts: many(workouts),
}));

export type User = InferSelectModel<typeof users> & { user: User };

//Workout
export const workouts = pgTable("workouts", {
  id: serial("id").primaryKey(),
  userId: integer("userId").references(() => users.id),
  date: date("date").notNull(),
  duration: integer("duration").notNull(),
});

export const workRelations = relations(users, ({ many }) => ({
  exerciseDetails: many(exerciseDetails),
}));

export type Workout = InferSelectModel<typeof workouts> & { workout: Workout };

//Equipment
export const equipment = pgTable("equipment", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});

export const equipmentRelations = relations(equipment, ({ many }) => ({
  exercises: many(exercises),
}));

export type Equipment = InferSelectModel<typeof equipment> & {
  equipment: Equipment;
};

//Exercise
export const exercises = pgTable("exercises", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  equipmentId: integer("equipmentId").references(() => equipment.id),
});

export const exerciseRelations = relations(exercises, ({ many }) => ({
  targetMuscleGroups: many(muscleGroups),
  secondaryTargetMuscleGroups: many(muscleGroups),
}));

export type Exercise = InferSelectModel<typeof exercises> & {
  exercise: Exercise;
};

//Exercise Details
export const exerciseDetails = pgTable("exerciseDetails", {
  id: serial("id").primaryKey(),
  workoutId: integer("workoutId").references(() => workouts.id),
  exerciseId: integer("exerciseId").references(() => exercises.id),
  sets: integer("sets").notNull(),
  reps: integer("reps").notNull(),
  weight: doublePrecision("weight").notNull(),
  distance: doublePrecision("distance").notNull(),
});

export type ExerciseDetail = InferSelectModel<typeof exerciseDetails> & {
  exerciseDetail: ExerciseDetail;
};

//Muscle Group
export const muscleGroups = pgTable("muscleGroups", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  type: integer("type").notNull(),
  recoveryPercentage: integer("recoveryPercentage").notNull(),
});

export type MuscleGroup = InferSelectModel<typeof muscleGroups> & {
  muscleGroup: MuscleGroup;
};
