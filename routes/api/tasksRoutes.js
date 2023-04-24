const express = require("express");
const { createTaskController, getAllTasksController, removeTaskController, updateTaskController } = require("../../controllers/tasks");

const router = express.Router();


router.get("/", getAllTasksController);

router.post("/", createTaskController);


router.patch("/:taskId", updateTaskController);

router.delete("/:taskId", removeTaskController);





module.exports = router;
