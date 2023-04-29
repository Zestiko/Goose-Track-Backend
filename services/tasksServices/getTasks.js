const Task = require('../../models/tasksModel');
const { AppError } = require('../../utils');

const getTasks = async (owner, date) => {
  const currentDate = date ? new Date(date) : new Date();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
    23,
    59,
    59
  );
  console.log('lastDayOfMonth', lastDayOfMonth);
  console.log('firstDayOfMonth', firstDayOfMonth);

  const tasks = await Task.find({
    owner,
    taskDate: { $gte: firstDayOfMonth, $lte: lastDayOfMonth },
  });
  if (!tasks) {
    throw new AppError(400, 'Error. Failed to get tasks.');
  }
  return tasks;
};
module.exports = getTasks;
