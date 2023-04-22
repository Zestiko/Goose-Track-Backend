const { AppError } = require("./../../utils");
const {validateNewUser} = require("../../utils/Joi");

const validateAuthRegister = (req, res, next) => {
    const { error, value } = validateNewUser(req.body);

    if (error) {
        const errorMessage = error.details
        .map(({ message }) => message)
        .join(";   ");
        return next(new AppError(400, errorMessage));
    }
    req.body = value;
    next();
};


module.exports = validateAuthRegister;