const Joi = require("joi");
const PASSWD_REGEX = require("../../constants/PASSWD_REGEX");

const validateNewUser = (reqBody) => {
  const schema = Joi.object({
    userName: Joi.string().min(2).max(10),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: true },
      })
      .required(),
    password: Joi.string().min(2).max(30).required().regex(PASSWD_REGEX),
    token: [
      Joi.string(),
      Joi.number()
    ],
  }).options({ abortEarly: false });
  const validateResul = schema.validate(reqBody);
  return validateResul;
};

module.exports = validateNewUser;
