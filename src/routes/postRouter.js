import { Router } from "express";
import { postPublication, showPosts } from "../controllers/postController.js";
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

router.get(
  "/posts",
  tokenValidation,
  showPosts
);

export default router;
