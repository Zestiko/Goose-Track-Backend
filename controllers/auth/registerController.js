const { catchAsync, AppError } = require("../../utils");
const { registerUser } = require("../../services/userServices");
const User = require("../../models/userModel");
const jwt = require("jsonwebtoken");

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

const registerController = catchAsync(async (req, res) => {
  const {email} = req.body;
  const user = await User.findOne({ email })
  if (user) {
    throw new AppError(409, 'Email in use');
  }

  const newUser = await registerUser(req.body);

  // Токен
  const token = signToken(newUser.id);
  await User.findByIdAndUpdate(newUser.id, { token });
  
  res.status(200).json({
    newUser,
    token,
  });
});

module.exports = registerController;
