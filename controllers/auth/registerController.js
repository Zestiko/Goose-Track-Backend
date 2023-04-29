const { catchAsync, AppError } = require("../../utils");
const { registerUser } = require("../../services/userServices");
const User = require("../../models/userModel");
const jwt = require("jsonwebtoken");

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

const registerController = catchAsync(async (req, res) => {
  const { email: requestEmail } = req.body;
  const user = await User.findOne({ requestEmail });
  if (user) {
    throw new AppError(409, 'Email in use');
  }

  const { id, userName, email } = await registerUser(req.body);

  // Токен
  const token = signToken(id);
  await User.findByIdAndUpdate(id, { token });
  
  res.status(200).json({
    user: {
      userName,
      email,
    },
    token,
  });
});

module.exports = registerController;
