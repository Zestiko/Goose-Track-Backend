const cloudinary = require('cloudinary');
const User = require("../../models/userModel");
const { AppError } = require("../../utils");


const uploadAvatar = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log(result)
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { avatar: result.secure_url },
      { new: true }
    )
res.status(200).json({
    user,
  });
  } catch (error) {
    throw new AppError(500, error.message);
  }
};
module.exports = uploadAvatar
