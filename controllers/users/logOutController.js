const User = require('../../models/userModel');
const { catchAsync, AppError } = require('../../utils');

const logOutController = catchAsync(async (req, res, next) => {
  const { id } = req.user;
  const user = await User.findByIdAndUpdate(id, { token: null }, { new: true });
  if (!user) {
    throw new AppError(401, 'Not authorized');
  }
  res.status(204).json('No Content');
});

module.exports = logOutController;
