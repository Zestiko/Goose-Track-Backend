const express = require("express");
const { createTaskController, getAllTasksController, removeTaskController, updateTaskController } = require("../../controllers/tasks");
const validateTask = require("../../utils/Joi/validateTask");

const router = express.Router();

router.get("/", getAllTasksController);

router.post("/", validateTask,createTaskController);

router.patch("/:taskId", validateTask, updateTaskController);

router.delete("/:taskId", removeTaskController);

module.exports = router;
