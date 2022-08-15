import { Router } from "express";
import { getUser, getUserbyId,getUsers, getUserPosts,getUserbyToken } from "../controllers/userController.js";
import { tokenValidation } from "../middlewares/tokenValidation.js";

const userRouter = Router();

userRouter.get("/users", getUsers);
userRouter.get("/user", tokenValidation, getUser);
userRouter.get("/user/token",getUserbyToken )
userRouter.get("/user/:id",  tokenValidation,getUserbyId);
userRouter.get("/user/posts/:id", tokenValidation,getUserPosts)
export default userRouter;