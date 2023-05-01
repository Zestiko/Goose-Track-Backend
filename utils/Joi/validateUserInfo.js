const Joi = require('joi');
const { PHONE_NUMBER_REGEX, AVATAR_URL_REGEX, DATE_REGEX } = require('../../constants');

const validateUserInfo = data =>
  Joi.object({
    userName: Joi.string().min(3).max(50).optional(),
    birthday: Joi.date().optional(),
    email: Joi.string().email().optional(),
    phone: Joi.string().regex(PHONE_NUMBER_REGEX).optional(),
    telegram: Joi.string().min(3).optional(),
    avatar: Joi.string().optional(),
  }).options({ abortEarly: false }).validate(data);

module.exports = validateUserInfo;
