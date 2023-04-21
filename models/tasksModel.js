const mongoose = require("mongoose");
const tasksPriority = require('../constants/tasksPriority')


const tasksShema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Set title "],
  },
  start: {
    type: Number,
    required: [true, "Set start time"],
    unique: [true, "Duplicated start time.."],
  },
  end: {
    type: Number,
    required: [true, "Set end time"],
  },
  role: {
    type: String,
    enum: Object.values(tasksPriority),
    default: tasksPriority.LOW,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "users",
    // required: [true, "Todo must have an owner.."],
  },
});



const Task = mongoose.model("tasks", tasksShema);

module.exports = Task;
