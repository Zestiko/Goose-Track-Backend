const { uploadCloudParams } = require('../services/userServices');
const uploadAvatar = require('../services/userServices/uploadAvatar');
const AppError = require('../utils/AppError');
const { catchAsync } = require('../utils');

const getAvatarPathFromCloud = catchAsync(async (req, res) => {

  uploadCloudParams.single('avatar')(req, res, async err => {
    if (err) {
      throw new AppError(500, err.message);
    }

    if (req.file) {
      const result = await uploadAvatar(req);
      req.user.avatar = result.secure_url;
    }
  });
});

module.exports = getAvatarPathFromCloud;
