import { Router } from "express";
import { getUser, getUserbyId,getUsers, getUserPosts,getUserbyToken } from "../controllers/userController.js";
import { tokenValidation } from "../middlewares/tokenValidation.js";
import { validateSchema } from "../middlewares/schemaValidation.js";
import offsetSchema from "../schemas/offsetSchema.js";

const userRouter = Router();

userRouter.get("/users", getUsers);
userRouter.get("/user", tokenValidation, getUser);
userRouter.get("/user/token",getUserbyToken )
userRouter.get("/user/:id", tokenValidation,getUserbyId);
userRouter.get(
    "/user/posts/:id/:offset",
    validateSchema(offsetSchema),
    tokenValidation,
    getUserPosts
);
export default userRouter;