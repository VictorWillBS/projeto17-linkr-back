import { Router } from "express";
import { getFollowers, postFollowers, unfollowing } from "../controllers/followController.js";
import { tokenValidation } from "../middlewares/tokenValidation.js";
import { validateSchema } from "../middlewares/schemaValidation.js";
import followSchema from "../schemas/followSchema.js";
import userIdSchema from "../schemas/userIdSchema.js";

const followRouter = Router();

followRouter.get(
    "/followers",
    tokenValidation,
    getFollowers
);
followRouter.post(
    "/followers",
    validateSchema(followSchema),
    tokenValidation,
    postFollowers
);
followRouter.delete(
    "/followers/:id",
    validateSchema(userIdSchema),
    tokenValidation,
    unfollowing
);

export default followRouter;