import { Router } from "express";

import { allLikes, postLike,deleteLike } from "../controllers/likeController.js";
import { validateSchema } from "../middlewares/schemaValidation.js";
import likeSchema from "../schemas/likeSchema.js";

const router = Router();
router.delete("/like/:postId/:userId", deleteLike);
router.post("/like/:postId", validateSchema(likeSchema), postLike);
router.get("/like/:postId", allLikes);

export default router;