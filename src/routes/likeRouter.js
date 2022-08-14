import { Router } from "express";
// import { validateSchema } from "../middlewares/schemaValidation.js";
// import { allLikes,allUserLikes, deleteLike, postLike } from "../controllers/likeController.js";

// const likeRoute = Route();

// likeRoute.get("/likes/:postId",allLikes);
// likeRoute.get("/likes/:userId",allUserLikes);
// likeRoute.post("/likes/:postId",postLike);
// likeRoute.delete("/likes/:postId",deleteLike);

import { allLikes, postLike,deleteLike } from "../controllers/likeController.js";
import { validateSchema } from "../middlewares/schemaValidation.js";
import { tokenValidation } from "../middlewares/tokenValidation.js";
import getLikeSchema from "../schemas/getLikeSchema.js";
import likeSchema from "../schemas/likeSchema.js";

const router = Router();
router.delete("/like/:postId/:userId", deleteLike);
router.post("/like/:postId", validateSchema(likeSchema), postLike);
router.get("/like/:postId", allLikes);

export default router;