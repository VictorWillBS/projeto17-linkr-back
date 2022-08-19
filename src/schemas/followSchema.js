import Joi from "joi";

const followSchema = Joi.object({
    followingId: Joi.number().min(1).required()
});

export default followSchema;