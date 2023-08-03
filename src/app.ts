// src/app.ts
import express, { Response, Request, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import authRoutes from "./routes/auth.routes";
import profileRouter from "./routes/profile.routes";
import { authenticateUser } from "./services/auth.service";
import { onSocketConnection } from "./socket.io";
import { decodeToken } from "./config/auth";
import { IUser } from "./models/user.model";
const { Server } = require("socket.io");
const http = require("http");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// set view engine to render views
app.set("view engine", "ejs");

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", async (req: Request, res: Response) => {
  res.status(200).send("Server is running!!🚀");
});

// Create socket io server
const server = http.createServer(app);
export const io = new Server(server);
io.on("connection", onSocketConnection);

// Routes
app.use("/auth", authRoutes);
app.get("/chat", (req: Request, res: Response) => {
  const token = req.query.token as string;

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }
  try {
    const decoded = <IUser>decodeToken(token);
    res.render("chat", { name: decoded.username });
  } catch (error) {
    return res.status(401).json({ message: "Token is not valid" });
  }
});
app.use("/user", authenticateUser, profileRouter);

// Error Handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
});

// Start the server
connectDB().then(() => {
  server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port} 🚀🚀`);
  });
});
