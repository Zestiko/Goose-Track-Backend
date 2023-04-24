const Joi = require("joi");
const { tasksPriority, COLUMNS_TITLE } = require("../../constants");

const validateTask = reqBody => {
    Joi.object({
    title: Joi.string().min(3).max(30).optional(),
    startTime: Joi.number().integer().min(0).max(24).optional(),
    endTime: Joi.number().integer().min(0).max(24).optional(),
    priority: Joi.string().regex(tasksPriority).optional(),
    column: Joi.string().regex(COLUMNS_TITLE).optional(),
    taskDate: Joi.date().greater('20-04-2023'),
  }).validate(reqBody);
}

module.exports = validateTask;