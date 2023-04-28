const User = require('../../models/userModel');
const editUserInfo = require('../../services/userServices/editUser');
const { catchAsync } = require('../../utils');

const patchUserInfo = catchAsync(async (req, res) => {
  req.body.avatar = req.file.path;

  const newUserInfo = await editUserInfo(req.user.id, req.body);

  res.status(200).json({ user: newUserInfo });
});

module.exports = patchUserInfo;
