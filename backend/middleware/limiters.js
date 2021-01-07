const rateLimit = require("express-rate-limit");

const message = "Woah! Slow down!";

const signUpLimit = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message,
});

const logInLimit = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 20,
  message,
});

const forgetPasswordLimit = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message,
});

const getRouteLimit = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5000,
  message,
});

const postLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
});

const commentLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30,
});

module.exports = {
  signUpLimit,
  logInLimit,
  forgetPasswordLimit,
  getRouteLimit,
  postLimit,
  commentLimit,
};
