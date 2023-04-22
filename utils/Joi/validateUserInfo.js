const Joi = require('joi');
const { PHONE_NUMBER_REGEX, AVATAR_URL_REGEX } = require('../../constants');

const userInfoPatchValidator = data => {
  Joi.object({
    name: Joi.string().min(3).max(50),
    birthday: Joi.date().format('DD/MM/YYYY').utc(),
    email: Joi.string().email(),
    phone: Joi.string().pattern(PHONE_NUMBER_REGEX),
    telegram: Joi.string().min(3),
    avatar: Joi.string().pattern(AVATAR_URL_REGEX),
  }).validate(data);
};

module.exports = userInfoPatchValidator;