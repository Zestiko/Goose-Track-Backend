const express = require("express");
const usersController = require('../../controllers/users');
const checkAuth = require("../../middleware/validateAuth/checkAuth");

const router = express.Router();

router.get("/current", checkAuth, usersController.getCurrent);
router.post("/logout", (req, res, next) => { });

router.patch("/info", (req, res, next) => {});

module.exports = router;
