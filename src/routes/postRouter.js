import { Router } from "express";
import {
  postPublication, showPosts, editPosts, deletePosts
} from "../controllers/postController.js";
import { validateSchema } from "../middlewares/schemaValidation.js";
import { tokenValidation } from "../middlewares/tokenValidation.js";
import postSchema from "../schemas/postSchema.js";
import userIdSchema from "../schemas/userIdSchema.js";
import setPostSchema from "../schemas/setPostSchema.js";

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

router.put(
  "/posts",
  validateSchema(setPostSchema),
  tokenValidation,
  editPosts
)

router.delete(
  '/posts/:id',
  validateSchema(userIdSchema),
  tokenValidation,
  deletePosts
);

export default router;
