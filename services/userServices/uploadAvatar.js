const cloudinary = require('cloudinary');
const { catchAsync } = require('../../utils');

const uploadAvatar= catchAsync(async (req) => {
  const options = {
    width: 300,
    height: 300,
    crop: 'thumb',
  };
  return cloudinary.uploader.upload(req.file.path, options);
});

module.exports = uploadAvatar;
