const { User } = require("../../models/userModel");

const logoutUser = async (id, token) => {
  return await User.findByIdAndUpdate(id, token);
};

const updateUser = async (id, body) => {
  return await User.findByIdAndUpdate(id, body, { new: true });
};
module.exports = {
  logoutUser,
  updateUser,
};