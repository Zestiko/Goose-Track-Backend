const getAvatarPathFromCloud = require('../../middleware/getAvatarPathFromCloud');
const registerUser = require('./registerUser');
const uploadCloudParams = require('./uploadCloudParams');

module.exports = {
  registerUser,
  uploadCloudParams,
  getAvatarPathFromCloud,
};
