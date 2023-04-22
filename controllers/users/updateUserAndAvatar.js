const uploadCloud = require('../../middleware/uploadAvatar');
const User = require("../../models/userModel");
const editUserInfo = require('../../services/userServices/editUser');
const uploadAvatar = require('../../services/userServices/uploadAvatar');
const AppError = require('../../utils/AppError');

const updateUserAndAvatar = async (req, res) => {
  try {
    // Upload avatar to Cloudinary
    uploadCloud.single("avatar")(req, res, async (err) => {
      if (err) {
        throw new AppError(500, err.message);
        }
      const { name, email, birthday, phone, telegram } = req.body;
      const user = await User.findById(req.user.id);
      if (!user) {
        throw new AppError(404, "User not found");
      }
      user.name = name;
      user.email = email;
      user.birthday = birthday;
      user.phone = phone;
      user.telegram = telegram;

      // Update user info
      const updatedUser = await editUserInfo(req.user.id, {
        name,
        email,
        birthday,
        phone,
        telegram,
      });

      // Update avatarUrl with the new image URL from Cloudinary
      if (req.file) {
        const result = await uploadAvatar(req);
        updatedUser.avatar = result.secure_url;
      }

      res.json(updatedUser);
    });
  } catch (error) {
    throw new AppError(500, error.message);
  }
};

module.exports = updateUserAndAvatar;