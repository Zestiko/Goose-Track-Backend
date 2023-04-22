const { catchAsync, AppError } = require("../../utils");
const { registerUser } = require("../../services/userServices");
const User = require("../../models/userModel");

const registerController = catchAsync(async (req, res) => {
  const {userName, email, password} = req.body;

  const user = await User.findOne({ email })
  if (user) {
    throw new AppError(409, 'Email in use');
  }

  const newUser = await registerUser({userName, email, password});
  res.status(200).json({
    newUser,
  });
});

module.exports = registerController;
