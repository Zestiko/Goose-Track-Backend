const { catchAsync } = require("../../utils");

const { updateTask } = require("../../services/tasksServices");

const updateTaskController = catchAsync(async (req, res) => {
  const { taskId } = req.params;
  const { _id: owner } = req.user;
  const { body: updatedTask } = req;

  const task = await updateTask(taskId, updatedTask, owner);
  res.status(200).json({ message: "Success. Task data updated.", task });
});

module.exports = updateTaskController;