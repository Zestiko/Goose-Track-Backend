const getAvatarPathFromCloud = require('../../middleware/getAvatarPathFromCloud');
const registerUser = require('./registerUser');
const uploadCloudParams = require('./uploadCloudParams');
const loginUser = require('./loginUser')
const saveTokenToUser = require('./saveTokenToUser')


module.exports = {
  registerUser,
  uploadCloudParams,
  getAvatarPathFromCloud,
  loginUser,
  saveTokenToUser,
};
