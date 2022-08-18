import Joi from "joi";

const offsetSchema = Joi.object({
    offset: Joi.string().pattern(/^[0-9]+$/).required()
});

export default offsetSchema;