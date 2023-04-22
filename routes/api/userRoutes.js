const express = require("express");
const updateUserAndAvatar = require("../../controllers/users/updateUserandAvatar");


const router = express.Router();

router.get("/current", (req, res, next) => {});
router.post("/logout", (req, res, next) => { });

router.patch("/info", updateUserAndAvatar);

module.exports = router;
