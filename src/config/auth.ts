// src/config/auth.ts
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const generateToken = (payload: any) => {
  const secret = process.env.JWT_SECRET;
  const expiresIn = process.env.JWT_EXPIRES_IN;
  return jwt.sign(payload, secret, { expiresIn });
};

export const verifyToken = (
  req: Request & { user?: any },
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = decodeToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token is not valid" });
  }
};

export const decodeToken = (token: string) => {
  const secret = process.env.JWT_SECRET;
  return jwt.verify(token, secret);
};
