const mongoose = require("mongoose");
const tasksPriority = require('../constants/tasksPriority')
const COLUMNS_TITLE = require('../constants/COLUMNS_TITLE')

const tasksShema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Set title "],
  },
  startTime: {
    type: Number,
    required: [true, "Set start time"],
    // unique: [true, "Duplicated start time.."],
  },
  endTime: {
    type: Number,
    required: [true, "Set end time"],
  },
  priority: {
    type: String,
    enum: Object.values(tasksPriority), // ["low","medium","high"]
    default: tasksPriority.LOW,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "users",
    // required: [true, "Todo must have an owner.."],
  },
  column: {
    type: String,
    enum: Object.values(COLUMNS_TITLE), // ["toDo","inProgress","done"]
    default: COLUMNS_TITLE.TODO,
  },
  taskDate: {
    type: Date,
    default: Date.now,
    // required: [true, "Set taskDate"],
  },
});



const Task = mongoose.model("tasks", tasksShema);

module.exports = Task;
