const { date, catchAsync } = require("../../utils");

const { addTask } = require("../../services/tasksServices");

const createTask = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const task = await addTask(req.body);
  res.status(200).json({
    Date: date(),
    task,
  });
});

module.exports = createTask;
