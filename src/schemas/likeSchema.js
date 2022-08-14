import joi from "joi";

const likeSchema = joi.object({
  userId: joi.number()
});

export default likeSchema;
