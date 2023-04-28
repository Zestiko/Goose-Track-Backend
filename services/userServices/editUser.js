const User = require("../../models/userModel");
const { AppError } = require("../../utils");

const editUserInfo = async (id,data) => {
  try {
    const { name,email,birthday,phone,telegram } = data;
    const user = await User.findByIdAndUpdate(
      id,
        {
          ...data      
        },
      { new: true }
    );
    return user
  } catch (error) {
    throw new AppError(500, error.message);
  }
};

module.exports = editUserInfo;