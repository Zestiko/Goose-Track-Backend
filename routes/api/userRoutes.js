const express = require('express');
const usersController = require('../../controllers/users');
const checkAuth = require('../../middleware/validateAuth/checkAuth');

const { logOutController } = require('../../controllers/auth/LogOutController');
const { uploadCloudParams } = require('../../services/userServices');
const validateUserData = require('../../middleware/validateUser/validateUserData');

const router = express.Router();
router.use(checkAuth);

router.get('/current', usersController.getCurrent);

router.post('/logout',  logOutController);

router.patch(
  '/info',
  uploadCloudParams.single('avatar'),
  validateUserData,
  usersController.patchUserInfo
);

module.exports = router;
