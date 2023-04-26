const express = require('express');
const {
  registerController,
  loginController,
} = require('../../controllers/auth');
const {
  validateAuthRegister,
  validateAuthLogin,
} = require('../../middleware/validateAuth');

const router = express.Router();

router.post('/register', validateAuthRegister, registerController);
router.post('/login', validateAuthLogin, loginController);

module.exports = router;
