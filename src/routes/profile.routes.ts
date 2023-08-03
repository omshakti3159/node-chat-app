import { Router } from "express";
import { profiles } from "../controllers/profile.controller";

const profileRouter = Router();

profileRouter.get("/profiles", profiles);

export default profileRouter;
