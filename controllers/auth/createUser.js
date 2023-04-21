const { date, catchAsync } = require("../../utils");


const { addUser } = require("../../services/userServices");

const createUser = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const task = await addUser(req.body);
  res.status(200).json({
    Date: date(),
    task,
  });
});

module.exports = createUser;
