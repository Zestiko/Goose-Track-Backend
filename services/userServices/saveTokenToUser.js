const User = require("../../models/userModel");
const { AppError } = require("../../utils");

const saveTokenToUser = async (id, token) => {
  try {
    const update = {
      token,
    };


    const saveToken = await User.findByIdAndUpdate(id, update);

    return saveToken;
  } catch (error) {
    throw new AppError(500, error);
  }
};

module.exports = saveTokenToUser;
