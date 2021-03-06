import Joi from 'joi';
const validator = require('express-joi-validation').createValidator({})

const registerSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().regex(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/).required(),
    password: Joi.string().required().min(3).max(15).trim()
})


const registerValidation = validator.body(registerSchema);

export {
    registerValidation
}