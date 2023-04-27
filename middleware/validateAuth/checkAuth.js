const jwt = require("jsonwebtoken");
const User = require("../../models/userModel");
const { catchAsync, AppError } = require("../../utils");

const checkAuth = catchAsync(async (req, res, next) => {
  const token =
    req.headers.authorization?.startsWith("Bearer") &&
    req.headers.authorization.split(" ")[1];
  if (!token)
    return next(new AppError(401, "Not authorized "));

  const {id} = jwt.verify(token, process.env.JWT_SECRET);
  

  const currentUser = await User.findById(id);
  if (!currentUser || currentUser.token !== token) {
    return next(new AppError(401, 'Not authorized'));
  }


  req.user = currentUser;

  next();
});

module.exports = checkAuth;
