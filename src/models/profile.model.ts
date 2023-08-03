// src/models/user.model.ts
import mongoose from "mongoose";

export interface IProfile extends mongoose.Document {
  name: string;
  language: string;
  bio: string;
}

const profileSchema = new mongoose.Schema({
  name: { type: String },
  language: { type: String },
  bio: { type: String, required: true },
});

export const ProfileModel = mongoose.model<IProfile>("Profile", profileSchema);
