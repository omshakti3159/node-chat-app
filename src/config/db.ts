// src/config/db.ts
import { createClient } from "redis";
import mongoose from "mongoose";

export const redisClient = createClient();

redisClient.on("error", (err) => console.log("Redis Client Error", err));

export const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;

    await mongoose.connect(mongoURI);
    console.log("MongoDB connected");
    await redisClient.connect();
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};
