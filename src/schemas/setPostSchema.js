import joi from "joi";

const setPostSchema = joi.object({
  postId: joi.number().min(1).required(),
  content: joi.string().required()
});

export default setPostSchema;