import Joi from "joi";

const offsetSchema = Joi.object({
    id: Joi.string().pattern(/^[0-9]+$/),
    hashtag: Joi.string(),
    offset: Joi.string().pattern(/^[0-9]+$/).required()
});

export default offsetSchema;