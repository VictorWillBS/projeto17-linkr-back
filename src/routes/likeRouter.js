import { Router } from "express";
import { getLikes, like } from "../controllers/likeController.js";
import { validateSchema } from "../middlewares/schemaValidation.js";
import { tokenValidation } from "../middlewares/tokenValidation.js";
import getLikeSchema from "../schemas/getLikeSchema.js";
import likeSchema from "../schemas/likeSchema.js";

const router = Router();

router.post("/like", validateSchema(likeSchema), tokenValidation, like);
router.get("/likes", validateSchema(getLikeSchema), getLikes);

export default router;