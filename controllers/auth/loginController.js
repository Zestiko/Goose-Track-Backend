const { date, catchAsync, AppError } = require('../../utils');
const { loginUser, saveTokenToUser } = require('../../services/userServices');

const jwt = require('jsonwebtoken');

const signToken = id =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

const loginController = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await loginUser(email);

  if (!user) {
    return next(new AppError(401, 'Email or password is wrong'));
  }
  const passwordIsValid = await user.checkPassword(password, user.password);

  if (!passwordIsValid) {
    return next(new AppError(401, 'Email or password is wrong'));
  }

  user.password = undefined;
  console.log(user.id);

  const token = signToken(user.id);
  await saveTokenToUser(user.id, token);

  res.status(200).json({
    Date: date(),
    user: {
      email: user.email,
    },
    token,
  });
});

module.exports = loginController;
