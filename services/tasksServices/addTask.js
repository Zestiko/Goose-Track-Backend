const Task = require('../../models/tasksModel');
const { AppError } = require('../../utils');


const addTask = async (contactData) => {
  try {
    const newTask = await Task.create(contactData);
    return newTask;
  } catch (error) {
    throw new AppError(500, error.message);
  }
};

module.exports = addTask;