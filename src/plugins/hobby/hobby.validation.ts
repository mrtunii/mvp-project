import * as Joi from 'Joi';

export const createHobbyValidator = {
    payload: Joi.object({
        "name": Joi.string().required(),
        "passionLevel": Joi.string().required(),
        "year": Joi.number().required()
    }),
    params: Joi.object({
        "userId": Joi.string().required()
    })
}