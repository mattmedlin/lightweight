import { Request, Response } from "express";
import { users } from "../db/schema";
import { db } from "../db";

export const UserController = {
  // Controller method for getting all users
  getAllUsers: async (req: Request, res: Response) => {
    try {
      // Retrieve all users from the database
      const allUsers = await db.select().from(users);

      // Send the users as a JSON response
      res.json(allUsers);
    } catch (error) {
      // Handle any errors and send an error response
      console.error("Error fetching users:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  // Controller method for creating a new user
  createUser: async (req: Request, res: Response) => {
    try {
      // Extract user data from the request body
      const { name, sex, weight, height } = req.body;

      // Insert a new user into the database
      await db.insert(users).values({ name, sex, weight, height });

      // Send a success response
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      // Handle any errors and send an error response
      console.error("Error creating user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  // Add other controller methods for updating, deleting, or retrieving individual users as needed
};
