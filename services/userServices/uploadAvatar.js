const cloudinary = require('cloudinary');
const User = require("../../models/userModel");
const { AppError } = require("../../utils");


const uploadAvatar = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { avatarUrl: result.secure_url },
      { new: true }
    );
    res.json(user);
  } catch (error) {
    throw new AppError(500, error.message);
  }
};
module.exports = uploadAvatar
