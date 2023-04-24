const Task = require('../../models/tasksModel');
const { AppError } = require('../../utils');

const updateTask = async (taskId, updatedTask, owner) => {
    const { title, startTime, endTime, taskDate } = updatedTask;
    
    if (!title && !startTime && !endTime && !taskDate) {
        throw new AppError(400, "Error. Missing fields.");
    }

    const task = await Task.findOneAndUpdate(
        { _id: taskId, owner },
        { $set: updatedTask },
        { new: true }
    );
    if (!task) {
        throw new AppError(404, `Task with id=${taskId} not found`);
    }

    return task;
};

module.exports = updateTask;