import joi from "joi";

const repostSchema = joi.object({
  postId: joi.number().required(),
});

export default repostSchema;
