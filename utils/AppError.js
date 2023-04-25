class AppError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}
class Unauthorized extends Error {
  constructor(message) {
      super(message);
      this.status = 401;
      this.message = message;
  }
}
module.exports = {
  AppError,
  Unauthorized
} 
