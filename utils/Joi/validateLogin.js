const Joi = require('joi');
const PASSWD_REGEX = require('../../constants/PASSWD_REGEX');

const validateLogin = reqBody => {
  const schema = Joi.object({
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: true },
      })
      .required(),
    password: Joi.string().min(2).max(30).required().regex(PASSWD_REGEX),
  }).options({ abortEarly: false });
  const validateResul = schema.validate(reqBody);
  return validateResul;
};

module.exports = validateLogin;
