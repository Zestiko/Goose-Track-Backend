const Task = require('../../models/tasksModel');
const { AppError } = require('../../utils');

const removeTask = async (taskId, owner) => {
  const removedTask = await Task.findOneAndRemove({
    _id: taskId,
    owner,
  });
  if (!removedTask) {
    throw new AppError(404, `Task with id:${taskId} was not found`);
  }
  return removedTask;
};

module.exports = removeTask;