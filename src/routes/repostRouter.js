import { Router } from "express";
import { postRepost } from "../controllers/repostController.js";
import { validateSchema } from "../middlewares/schemaValidation.js";
import { tokenValidation } from "../middlewares/tokenValidation.js";
import repostSchema from "../schemas/repostSchema.js";

const router = Router();

router.post("/repost", validateSchema(repostSchema), tokenValidation, postRepost);

export default router;