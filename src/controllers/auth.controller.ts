// src/controllers/auth.controller.ts
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { UserModel } from "../models/user.model";
import { generateToken } from "../config/auth";

export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const tokenPayload = {
      id: user._id,
      email: user.email,
      username: user.username,
    };
    const token = generateToken(tokenPayload);

    return res.json({ token });
  } catch (error) {
    console.error("Error logging in user:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
