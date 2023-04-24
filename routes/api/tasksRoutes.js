const express = require("express");
const { createTaskController, getAllTasksController, removeTaskController, updateTaskController } = require("../../controllers/tasks");
const { validTask } = require("../../middleware/validateTasks");

const router = express.Router();

router.get("/", getAllTasksController);

router.post("/", validTask,createTaskController);

router.patch("/:taskId", validTask, updateTaskController);

router.delete("/:taskId", removeTaskController);

module.exports = router;
