const getTasks = require("../../services/tasksServices/getTasks");
const { catchAsync } = require("../../utils");

const getAllTasksController = catchAsync(async (req, res) => {
    const { _id: owner } = req.user;
    const { date } = req.body;

  const tasks = await getTasks(owner,date);

  res.status(200).json({
    message: 'Success',
    tasks
  })
})

module.exports = getAllTasksController;
