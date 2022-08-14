import { Router } from "express";
// <<<<<<< HEAD
// import { validateSchema } from "../middlewares/schemaValidation.js";
// import { allLikes,allUserLikes, deleteLike, postLike } from "../controllers/likeController.js";

// const likeRoute = Route();

// likeRoute.get("/likes/:postId",allLikes);
// likeRoute.get("/likes/:userId",allUserLikes);
// likeRoute.post("/likes/:postId",postLike);
// likeRoute.delete("/likes/:postId",deleteLike);
// =======
import { getLikes, like } from "../controllers/likeController.js";
import { validateSchema } from "../middlewares/schemaValidation.js";
import { tokenValidation } from "../middlewares/tokenValidation.js";
import getLikeSchema from "../schemas/getLikeSchema.js";
import likeSchema from "../schemas/likeSchema.js";

const router = Router();

router.post("/like", validateSchema(likeSchema), tokenValidation, like);
router.get("/likes", validateSchema(getLikeSchema), getLikes);

export default router;
// >>>>>>> 85ecc916c2e47984ddb46471bf2a70bc9388cdff
