import { Router } from "express";
import { validateSchema } from "../middlewares/schemaValidation.js";
import loginSchema from "../schemas/loginSchema.js";
import { login } from "../controllers/authController.js";
import { signUp } from "../controllers/signControllers.js";
import signupSchema from "../schemas/signupSchema.js";

const authRouter = Router();

authRouter.post('/signin', validateSchema(loginSchema), login);
authRouter.post('/signup', validateSchema(signupSchema), signUp);

export default authRouter;