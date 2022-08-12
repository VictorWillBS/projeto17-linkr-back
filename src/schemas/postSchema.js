import joi from "joi";

const postSchema = joi.object({
  url: joi.string().uri().required(),
  content: joi.string().min(0),
  tags: joi.array()
});

export default postSchema;
