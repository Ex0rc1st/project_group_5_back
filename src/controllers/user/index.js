const registerUser = require("./registerUser");
const loginUser = require("./loginUser");
const logoutUser = require("./logoutUser");
const verifyMail = require("./verifyMail");
const againVerifyMail = require("./againVerifyMail");
const getCurrentUser = require("./getCurrentUser");
const updateUser = require("./updateUser");
const googleAuthUser = require("./googleAuthUser");

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  verifyMail,
  againVerifyMail,
  getCurrentUser,
  updateUser,
  googleAuthUser,
};
