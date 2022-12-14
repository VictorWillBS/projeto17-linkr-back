import { Router } from "express";
import {
  allCommentsById,
  getCountComment,
  postComment
} from "../controllers/commentController.js";
import { validateSchema } from "../middlewares/schemaValidation.js";
import { tokenValidation } from "../middlewares/tokenValidation.js";
import commentSchema from "../schemas/commentSchema.js";
import getCountCommentSchema from "../schemas/getCountPostSchema.js";

const router = Router();

router.post(
  "/comment",
  validateSchema(commentSchema),
  tokenValidation,
  postComment
);
router.post(
  "/commentId",
  validateSchema(getCountCommentSchema),
  tokenValidation,
  getCountComment
);

router.post(
  "/commentsId",
  validateSchema(getCountCommentSchema),
  tokenValidation,
  allCommentsById
);

export default router;
