const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const mongoose = require("mongoose");

require("dotenv").config();


const tasksRouter = require('./routes/api/tasksRoutes')
const authRouter = require("./routes/api/authRoutes");
const userRouter = require("./routes/api/userRoutes");


const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
mongoose
  .connect(process.env.BD_URL)
  .then((con) => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.log(err);

    process.exit(1);
  });
app.use(cors())
app.use(express.json())

app.use("/api/tasks", tasksRouter);
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = app
