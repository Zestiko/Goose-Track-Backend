const express = require("express");
const { registerController } = require("../../controllers/auth");
const { validateAuthRegister } = require("../../middleware/validateAuth");

const router = express.Router();


router.post("/register", validateAuthRegister, registerController);
router.post("/login", (req, res, next) => {});


module.exports = router;
