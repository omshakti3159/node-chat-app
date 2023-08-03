// src/models/user.model.ts
import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  username: string;
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const UserModel = mongoose.model<IUser>("User", userSchema);
