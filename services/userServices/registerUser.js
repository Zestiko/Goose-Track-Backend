const User = require("../../models/userModel");
const { AppError } = require("../../utils");

const registerUser = async (data) => {
  try {
    const newUser = await User.create(data);
    return newUser;
  } catch (error) {
    throw new AppError(500, error.message);
  }
};

module.exports = registerUser;
