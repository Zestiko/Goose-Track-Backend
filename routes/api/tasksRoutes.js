const express = require("express");
const { createTaskController, getAllTasksController, removeTaskController, updateTaskController } = require("../../controllers/tasks");
const { validTask } = require("../../middleware/validateTasks");
const checkAuth = require("../../middleware/validateAuth/checkAuth");

const router = express.Router();

router.use(checkAuth)

router.get("/", getAllTasksController);

router.post("/", validTask,createTaskController);

router.patch("/:taskId", validTask, updateTaskController);

router.delete("/:taskId", removeTaskController);

module.exports = router;
