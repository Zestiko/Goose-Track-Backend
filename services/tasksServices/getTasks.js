const Task = require('../../models/tasksModel')
const { AppError } = require('../../utils')

const getTasks = async(owner)=> {
    const query = {
        owner,
    }
    const tasks = await Task.find(query)
    if(!tasks) {
        throw new AppError(400, "Error. Failed to get tasks.")
    }
    return tasks;
}
module.exports = getTasks;