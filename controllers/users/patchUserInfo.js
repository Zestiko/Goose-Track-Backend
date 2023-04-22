const User = require('../../models/userModel');
const { catchAsync } = require('../../utils');

const patchUserInfo = catchAsync(async (req, res) => {
  const isEmptyBody = Object.keys(req.body).length === 0;

  if (isEmptyBody) return res.status(200).json({ user: req.user });

  const newUserInfo = await User.findByIdAndUpdate(req.user.id, body, {
    new: true,
  });

  res.status(200).json({ user: newUserInfo });
});

module.exports = patchUserInfo;
