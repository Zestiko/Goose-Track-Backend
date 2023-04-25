const { User } = require("../models/userModel");
const jwt = require("jsonwebtoken");

const findUserBy = async (data) => {
  return await User.findOne(data);
};

const regUser = async ({ name, email, password }) => {
  return await User.create({ name, email, password });
};

const login = async ({ _id }, token) => {
  return await User.findByIdAndUpdate(_id, { token });
};

const createToken = ({ _id }) => {
  const { JWT_SECRET } = process.env;
  const playload = {
    id: _id,
  };

  return jwt.sign(playload, JWT_SECRET, { expiresIn: "1h" });
};

module.exports = {
  findUserBy,
  regUser,
  login,
  createToken,
};