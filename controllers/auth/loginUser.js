const { Unauthorized } = require("../../utils/AppError");
const { findUserBy, login, createToken } = require("../../services/userServices/auth");
const bcrypt = require("bcrypt");

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await findUserBy({ email });

  if (!user || !bcrypt.compareSync(password, user.password))
    throw new Unauthorized("Email or password is wrong");

  const token = await createToken(user);
  await login(user, token);

  res.status(200).json({
    token,
    user: {
      name: user.name,
      avatarURL: user.avatarURL,
    },
  });
};

module.exports = { loginUser };
