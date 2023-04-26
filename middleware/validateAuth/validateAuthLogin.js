const {
  catchAsync,
  AppError,
} = require('../../utils');
const { validateLogin } = require('../../utils/Joi');

const validateAuthLogin = catchAsync(async (req, res, next) => {
  const { error, value } = validateLogin(req.body);

  if (error) {
    const errorMessage = error.details
      .map(({ message }) => message)
      .join(';   ');
    return next(new AppError(400, errorMessage));
  }
  req.body = value;
  next();
});

module.exports = validateAuthLogin;
