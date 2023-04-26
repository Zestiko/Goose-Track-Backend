const validateAuthRegister = require("./validateAuthRegister");
const checkAuth = require('./checkAuth');
const validateAuthLogin = require('./validateAuthLogin');

module.exports = checkAuth;
module.exports = {
  validateAuthRegister,
  checkAuth,
  validateAuthLogin,
};

