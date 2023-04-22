const express = require("express");
const { createTask } = require("../../controllers/tasks");
const getAllTasksController = require("../../controllers/tasks/getAllTasks");




const router = express.Router();


router.get("/", getAllTasksController);

router.post("/", createTask);

router.patch("/:tasktId", (req, res, next) => {});

router.delete("/:tasktId", (req, res, next) => {});




module.exports = router;
