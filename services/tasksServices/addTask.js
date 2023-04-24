const Task = require('../../models/tasksModel');
const { AppError } = require('../../utils');


const addTask = async (newTask, owner) => {
  const { title, startTime, endTime, taskDate } = newTask;

  if (!title) {
    throw new AppError(400, "Error. Missing required name field.");
  } else if (!startTime) {
    throw new AppError(400, "Error. Missing required phone field.");
  } else if (!endTime) {
    throw new AppError(400, "Error. Missing required email field.");
  } else if (!taskDate) {
    throw new AppError(400, "Error. Missing required email field.");
  }

  const task = new Task({ ...newTask, owner });
  await task.save();
};

module.exports = addTask;