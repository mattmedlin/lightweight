import { Request, Response } from "express";
import { db } from "../db";
import { equipment } from "../db/schema";

export const EquipmentController = {
  getAllEquipment: async (req: Request, res: Response) => {
    try {
      const allEquipment = await db.select().from(equipment);
      res.status(200).json(allEquipment);
    } catch (error) {
      console.error("Error retrieving equipment:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  createEquipment: async (req: Request, res: Response) => {
    try {
      const { name } = req.body;
      if (!name) {
        return res.status(400).json({ message: "Name is required" });
      }

      const newEquipment = await db.insert(equipment).values({ name });
      res.status(201).json(newEquipment);
    } catch (error) {
      console.error("Error creating equipment:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};
