import Joi from "joi";

const userIdSchema = Joi.object({
    id: Joi.string().pattern(/^[0-9]+$/).required()
});

export default userIdSchema;