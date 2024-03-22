import express, { Request, Response, NextFunction } from "express";
import { UserController } from "./controllers/userController";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.post("/users", UserController.createUser);
// Add other routes for user-related operations (update, delete, etc.)

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
