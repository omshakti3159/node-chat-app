import { Request, Response } from "express";
import { getProfiles } from "../services/profile.service";
import { SortOrder } from "mongoose";

export const profiles = async (req: Request, res: Response) => {
  const { limit, page, sort } = req.query;
  const results = await getProfiles(
    Number(page || 0),
    Number(limit || 0),
    sort as SortOrder
  );
  res.status(200).json(results);
};
