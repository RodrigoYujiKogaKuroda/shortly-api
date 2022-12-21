import Joi from "joi";

export const signUpModel = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: joi.string().valid(joi.ref('password'))
});

export const signInModel = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});