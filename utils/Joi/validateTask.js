const Joi = require('joi');
const { tasksPriority, COLUMNS_TITLE, TIME_REGEX } = require('../../constants');

const validateTask = reqBody => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(250).optional(),
    startTime: Joi.string().regex(TIME_REGEX).optional(),
    endTime: Joi.string().regex(TIME_REGEX).optional(),
    priority: Joi.string()
      .valid(...Object.values(tasksPriority))
      .optional(),
    column: Joi.string()
      .valid(...Object.values(COLUMNS_TITLE))
      .optional(),
    taskDate: Joi.date(),
  }).options({ abortEarly: false });
  const validateResul = schema.validate(reqBody);
  return validateResul;
};
module.exports = validateTask;
