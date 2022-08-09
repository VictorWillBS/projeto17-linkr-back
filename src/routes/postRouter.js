import { Router } from "express";
import { postPublication } from "../controllers/postController.js";
import { validateSchema } from "../middlewares/schemaValidation.js";
import { tokenValidation } from "../middlewares/tokenValidation.js";
import postSchema from "../schemas/postSchema.js";

const router = Router();

router.post(
  "/posts",
  validateSchema(postSchema),
  tokenValidation,
  postPublication
);

export default router;
