const { catchAsync, AppError, validateTask } = require("../../utils");

const validTask = catchAsync(async (req, res, next) => {
  const { title, startTime, endTime, taskDate } = req.body;

  if (!title && !startTime && !endTime && !taskDate) {
    return next(new AppError(400, "missing required field"));
  }
  
  const { error, value } = validateTask(req.body);  
  

  if (error) {
      const errorMessage = error.details
        .map(({ message }) => message)
        .join(";   ");
      return next(new AppError(400, errorMessage));
    }
    req.body = value;
    next();

});

module.exports = validTask;