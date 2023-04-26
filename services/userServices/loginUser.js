const User = require("../../models/userModel");
const { AppError } = require("../../utils");

const loginUser = async email => {
  try {
    const user = await User.findOne({ email }).select('+password');

    return user;
  } catch (error) {
    throw new AppError(409, 'Email in use');
  }
};

module.exports = loginUser;
