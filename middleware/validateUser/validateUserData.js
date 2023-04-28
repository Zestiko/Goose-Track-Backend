const { catchAsync, AppError } = require('../../utils');
const validateUserInfo = require('../../utils/Joi/validateUserInfo');

const validateUserData = catchAsync(async (req, _, next) => {
  if (Object.getOwnPropertyNames(req.body).length === 0)
    return next(new AppError(400, 'Missing fields'));

  const { error, value } = validateUserInfo(req.body);

  if (error) {
    const errorMessage = error.details
      .map(({ message }) => message)
      .join(';   ');
    return next(new AppError(400, errorMessage));
  }

  req.body = value;

  next();
});

module.exports = validateUserData;
