import { Router } from "express";
import { postComment } from "../controllers/commentController.js";
import { validateSchema } from "../middlewares/schemaValidation.js";
import { tokenValidation } from "../middlewares/tokenValidation.js";
import commentSchema from "../schemas/commentSchema.js";

const router = Router();

router.post(
  "/comment",
  validateSchema(commentSchema),
  tokenValidation,
  postComment
);

export default router;
