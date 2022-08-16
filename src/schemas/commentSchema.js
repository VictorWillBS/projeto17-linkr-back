import joi from "joi";

const commentSchema = joi.object({
  content: joi.string().required(),
  postId: joi.number().required(),
});

export default commentSchema;
