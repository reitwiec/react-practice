const Joi = require('joi');

const register = Joi.object({
  body: Joi.object({
    name: Joi.string()
      .max(256)
      .required(),
    password: Joi.string()
      .required(),
    confirm_pass: Joi.string()
      .required(),
    email: Joi.string()
      .email()
      .required(),
    organisation: Joi.string()
      .max(100),
    regno: Joi.string()
      .max(20),
    phone: Joi.string()
      .max(20)
  })
});

const login = Joi.object({
  body: Joi.object({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .required()
  })
});

module.exports = {
  register,
  login
};
