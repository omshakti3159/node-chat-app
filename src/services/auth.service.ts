// src/services/auth.service.ts
import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../config/auth";

export const authenticateUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  verifyToken(req, res, next);
};
