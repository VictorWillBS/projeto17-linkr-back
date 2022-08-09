import joi from "joi";

const signupSchema = joi.object({
  email: joi.string().email().required(),
  userName: joi.string().required(),
  password: joi.string().min(6).required(),
  pictureUrl: joi.string().uri().required(),
});

export default signupSchema;
