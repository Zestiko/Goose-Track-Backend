const express = require("express");
const usersController = require('../../controllers/users');
const checkAuth = require("../../middleware/validateAuth/checkAuth");
const updateUserAndAvatar = require("../../controllers/users/updateUserandAvatar");

const router = express.Router();

router.get("/current", checkAuth, usersController.getCurrent);
router.post("/logout", (req, res, next) => { });

router.patch("/info", checkAuth, updateUserAndAvatar);

module.exports = router;
