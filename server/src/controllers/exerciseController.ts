import { Request, Response } from "express";
import { db } from "../db";
import { exerciseRelations, exercises, muscleGroups } from "../db/schema";

export const ExerciseController = {
  getAllExercises: async (req: Request, res: Response) => {
    try {
      // Retrieve all exercises with their associated muscle groups
      const allExercises = await db.query.exercises.findMany({});

      // Send the exercises as a JSON response
      res.json(allExercises);
    } catch (error) {
      // Handle any errors and send an error response
      console.error("Error fetching exercises:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  createExercise: async (req: Request, res: Response) => {
    try {
      const {
        name,
        equipmentId,
        targetMuscleGroups,
        secondaryTargetMuscleGroups,
      } = req.body;
      if (!name || !equipmentId) {
        return res
          .status(400)
          .json({ message: "Name and equipmentId are required" });
      }

      // Insert the new exercise into the database
      const newExercise = await db
        .insert(exercises)
        .values({
          name,
          equipmentId,
        })
        .returning();

      // Insert the related muscle groups into the exerciseMuscleGroups junction table

      res.status(201).json(newExercise[0]); // Assuming newExercise is an array with one item
    } catch (error) {
      console.error("Error creating exercise:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  // Remaining controller methods...
};
