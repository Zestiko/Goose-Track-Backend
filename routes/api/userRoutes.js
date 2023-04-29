const express = require('express');
const {
  getCurrent,
  patchUserInfo,
  logOutController,
} = require('../../controllers/users');
const checkAuth = require('../../middleware/validateAuth/checkAuth');
const { uploadCloudParams } = require('../../services/userServices');
const validateUserData = require('../../middleware/validateUser/validateUserData');

const router = express.Router();
router.use(checkAuth);

router.get('/current', getCurrent);

router.post('/logout',  logOutController);

router.patch(
  '/info',
  uploadCloudParams.single('avatar'),
  validateUserData,
  patchUserInfo
);

module.exports = router;
