import joi from "joi";

const getCountCommentSchema = joi.object({
  postId: joi.number().required(),
});

export default getCountCommentSchema;
