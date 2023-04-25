const { logoutUser } = require("../../services/user");

const logout = async (req, res) => {
  const { id } = req.user;
  await logoutUser(id, { token: null });
  res.status(204).json();
};

module.exports = {logout}