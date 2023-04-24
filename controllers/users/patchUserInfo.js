const User = require('../../models/userModel');
const { catchAsync } = require('../../utils');

const patchUserInfo = catchAsync(async (req, res) => {
  const isEmptyBody = Object.keys(req.body).length === 0;
  // для проверки в отсутствии токена и авторизации
  req.user = {}; // для проверки в отсутствии токена и авторизации
  req.user.id = '6443c79b332023d6a552f051'; // для проверки в отсутствии токена и авторизации

  if (isEmptyBody) return res.status(200).json({ user: req.user });

  const newUserInfo = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
  });

  res.status(200).json({ user: newUserInfo });
});

module.exports = patchUserInfo;
