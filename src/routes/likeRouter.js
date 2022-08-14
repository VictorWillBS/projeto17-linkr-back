import { Router } from "express";
import { validateSchema } from "../middlewares/schemaValidation.js";
import { allLikes,allUserLikes, deleteLike, postLike } from "../controllers/likeController.js";

const likeRoute = Route();

likeRoute.get("/likes/:postId",allLikes);
likeRoute.get("/likes/:userId",allUserLikes);
likeRoute.post("/likes/:postId",postLike);
likeRoute.delete("/likes/:postId",deleteLike);