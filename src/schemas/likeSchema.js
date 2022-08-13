import joi from "joi";

const likeSchema = joi.object({
  like: joi.boolean().required(),
  postIdLike: joi.number().required()
});

export default likeSchema;
