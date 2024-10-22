
import Joi from "joi";

export const postValidator =Joi.object({
    id:Joi.number()
        .min(1)
        .max(100)
        .messages({
            'number.min': 'try id where value is greater than 0',
            'number.max': 'id must not be greater than 100 '
        }),
    title:Joi.string()
        .required()
        .pattern(/\w{5,10}/)
        .messages({
            'any required':'title is required',
            'string.pattern.base': 'you dont mach to pattern'
        }),
    body:Joi.string()
        .required()
        .pattern(/\w{10,100}/)
        .messages({
            'any required':'title is required',
            'string.pattern.base': 'word limit min 10 max 100'
        })
})