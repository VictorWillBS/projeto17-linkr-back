import joi from "joi";

const getLikeSchema = joi.object({
  postLikeId: joi.number().required(),
});

export default getLikeSchema;
