const Joi = require('joi');
const { tasksPriority, COLUMNS_TITLE } = require('../../constants');


const validateTask = reqBody => {

  const schema = Joi.object({
    title: Joi.string().min(3).max(30).optional(),
    startTime: Joi.number().integer().optional(),
    endTime: Joi.number().integer().optional(),
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
