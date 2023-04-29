const { date, catchAsync, AppError } = require('../../utils');
const { loginUser, saveTokenToUser } = require('../../services/userServices');

const jwt = require('jsonwebtoken');

const signToken = id =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

const loginController = catchAsync(async (req, res, next) => {
  const { email: requestEmail, password } = req.body;

  const user = await loginUser(requestEmail);

  if (!user) {
    return next(new AppError(401, 'Email or password is wrong'));
  }
  const passwordIsValid = await user.checkPassword(password, user.password);

  if (!passwordIsValid) {
    return next(new AppError(401, 'Email or password is wrong'));
  }

  user.password = undefined;
  const { userName, email, birthday, phone, telegram, avatar, id } = user;


  const token = signToken(id);
  await saveTokenToUser(id, token);

  res.status(200).json({
    Date: date(),
    user: {
      userName,
      birthday,
      email,
      phone,
      telegram,
      avatar,
    },
    token,
  });
});

module.exports = loginController;
