import { Router } from "express";
import { getUser, getUsers } from "../controllers/userController.js";
import { tokenValidation } from "../middlewares/tokenValidation.js";

const userRouter = Router();

userRouter.get("/users", getUsers);
userRouter.get("/user", tokenValidation, getUser);

export default userRouter;