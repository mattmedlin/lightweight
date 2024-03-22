import express from "express";
import { UserController } from "../controllers/userController";

const router = express.Router();

// Route to create a new user
router.post("/", UserController.createUser);

// Route to get all users
router.get("/", UserController.getAllUsers);

// Export the router
export default router;
