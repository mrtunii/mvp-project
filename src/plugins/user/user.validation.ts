import * as Joi from 'Joi';

export const createUserValidator = {
    payload: Joi.object({
        "name": Joi.string()
    })
}