import { Router } from "express";
import { tagController } from "../controllers/tagController.js";
const tagsRouter = Router();

tagsRouter.get("/tagsTrending", tagController);

export default tagsRouter;