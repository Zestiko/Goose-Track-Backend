const { catchAsync } = require("../../utils");

const { removeTask } = require("../../services/tasksServices");

const removeTaskController = catchAsync(async (req, res) => {
  const { taskId } = req.params;
  const { _id: owner } = req.user;

  await removeTask(taskId, owner);
  res.status(200).json("Success. Task deleted.");
});

module.exports = removeTaskController;