import { Router } from "express";
import { validateSchema } from "../middlewares/schemaValidation.js";
import loginSchema from "../schemas/loginSchema.js";
import { login } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post('/signin', validateSchema(loginSchema), login);

export default authRouter;