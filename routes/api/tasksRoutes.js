const express = require("express");
const { createTask } = require("../../controllers/tasks");




const router = express.Router();


router.get("/", (req, res, next) => {});

router.post("/", createTask);

router.patch("/:tasktId", (req, res, next) => {});

router.delete("/:tasktId", (req, res, next) => {});




module.exports = router;
