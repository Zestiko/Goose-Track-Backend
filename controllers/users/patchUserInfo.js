
const editUserInfo = require('../../services/userServices/editUser');
const { catchAsync } = require('../../utils');

const patchUserInfo = catchAsync(async (req, res) => {
  req.body.avatar = req.file?.path;

  const { userName, email, birthday, token, phone, telegram, avatar } =
    await editUserInfo(req.user.id, req.body);

  res.status(200).json({
    user: { userName, email, birthday, phone, telegram, avatar },
    token,
  });
});

module.exports = patchUserInfo;
