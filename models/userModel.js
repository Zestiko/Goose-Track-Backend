const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const usersShema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Set name for user"],
  },
  password: {
    type: String,
    required: [true, "Set password for user"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Duplicated email.."],
  },
  birthday: {
    type: Number,
  },
  token: String,
  phone: String,
  telegram: String,
  avatar: String,
  // verify: {
  //   type: Boolean,
  //   default: false,
  // },
  // verificationToken: {
  //   type: String,
  //   required: [true, "Verify token is required"],
  // },
});

usersShema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

usersShema.methods.checkPassword = (candidate, hash) => bcrypt.compare(candidate, hash);

const User = mongoose.model("users", usersShema);

module.exports = User;
