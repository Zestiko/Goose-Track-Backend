const express = require('express');
const usersController = require('../../controllers/users');
const checkAuth = require('../../middleware/validateAuth/checkAuth');
const checkUserPatchData = require('../../middleware/validateUser/checkUserPatchData');
const getAvatarPathFromCloud = require('../../middleware/getAvatarPathFromCloud');

const router = express.Router();

router.get('/current', checkAuth, usersController.getCurrent);
router.post('/logout', (req, res, next) => {});

router.patch(
  '/info',
  checkAuth,
  getAvatarPathFromCloud,
  checkUserPatchData,
  usersController.patchUserInfo
);

module.exports = router;
