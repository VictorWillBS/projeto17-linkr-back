import { Router } from "express";
import { validateSchema } from "../middlewares/schemaValidation.js";
import userIdSchema from "../schemas/userIdSchema.js";
import { tokenValidation } from "../middlewares/tokenValidation.js";
import { getUsers } from "../controllers/userController.js";

const userRouter = Router();

userRouter.get(
    "/user/:id",
    validateSchema(userIdSchema),
    tokenValidation,
    getUsers
);

export default userRouter;