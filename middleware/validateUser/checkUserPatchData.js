const { catchAsync, getPropertiesFromObj, AppError } = require('../../utils');
const validateUserInfo = require('../../utils/Joi/validateUserInfo');

const checkUserPatchData = catchAsync(async (req, _, next) => {

    if(Object.getOwnPropertyNames(req.body).length === 0) return next()

  const keysForPatch = [
    'userName',
    'birthday',
    'email',
    'phone',
    'telegram',
    'avatar',
  ];


  const dataForPutch = getPropertiesFromObj(keysForPatch, req.body);

  const { error, value } = validateUserInfo(dataForPutch);

  if (error) return next(new AppError(400, 'Not valid data for info update'));

  req.body = value;

  next();
});

module.exports = checkUserPatchData;
