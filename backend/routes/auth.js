const express = require("express");
const jwt = require("jsonwebtoken");
const { v4 } = require("uuid");
const { User, Email } = require("../models");
const { hashPassword, comparePassword } = require("../utils/hash");
const {
  signUpLimit,
  logInLimit,
  forgetPasswordLimit,
} = require("../middleware/limiters");
const { check, validationResult } = require("express-validator");

const router = express.Router();

router.post(
  "/signup",
  signUpLimit,
  check("username")
    .isLength({ max: 20 })
    .withMessage("Username must not be longer than 20 characters")
    .matches(/^[/a-z0-9_-]*$/)
    .withMessage(
      "Username can only contain lowercase letters, numbers, dash and underscore"
    ),
  check("email").isEmail().withMessage("Please enter a valid email"),
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be more than 8 characters long")
    .matches(/^.*(?=.{8,100})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/)
    .withMessage(
      "Password must contain at least one uppercase, one lowercase, and one special character"
    ),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(403)
        .json({ errors: errors.array({ onlyFirstError: true }) });
    }

    try {
      const { username, email, password, rememberMe } = req.body;

      if (username && email && password && rememberMe !== null) {
        const checkUsername = await User.findOne({
          where: { username: username },
        });
        const checkEmail = await User.findOne({
          where: { email: email },
        });

        if (checkUsername) {
          return res.status(500).json({ msg: "Username already taken" });
        } else if (checkEmail) {
          return res.status(500).json({ msg: "Email already exists" });
        } else {
          const hash = await hashPassword(password);
          const user = await User.create({ username, email, hash });

          if (user) {
            const uuid = user.uuid;
            jwt.sign({ uuid }, "secretkey", (err, token) => {
              if (err) {
                return res.status(500).json({ err });
              } else {
                if (!rememberMe) {
                  res.cookie("token", token);
                } else {
                  res.cookie("token", token, {
                    maxAge: 31536000000,
                  });
                }
                return res.json({ token });
              }
            });
          } else {
            return res.status(500).json({ msg: "Signup failed" });
          }
        }
      } else {
        return res.status(500).json({ msg: "Please enter the correct fields" });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }
);

router.post("/login", logInLimit, async (req, res) => {
  try {
    const { username, email, password, rememberMe } = req.body;
    const searchByUsername = !!username;

    const user = searchByUsername
      ? await User.findOne({
          where: { username: username },
        })
      : await User.findOne({
          where: { email: email },
        });

    if (user) {
      const isValidPass = await comparePassword(password, user.hash);

      if (isValidPass) {
        jwt.sign({ uuid: user.uuid }, "secretkey", (err, token) => {
          if (err) {
            return res.status(500).json({ err });
          } else {
            if (!rememberMe) {
              res.cookie("token", token);
            } else {
              res.cookie("token", token, {
                maxAge: 31536000000,
              });
            }
            return res.json({ token });
          }
        });
      } else {
        return res.status(500).json({ msg: "Invalid Credentials" });
      }
    } else {
      return res.status(500).json({ msg: "Invalid Credentials" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.post("/logout", (req, res) => {
  try {
    res.clearCookie("token");
    return res.json({ msg: "Logged out" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.post(
  "/email/password/reset/send",
  // forgetPasswordLimit,
  async (req, res) => {
    try {
      const { email } = req.body;
      const user = await User.findOne({ where: { email: email } });

      if (user) {
        const host = process.env.HOST || "http://localhost:3000";
        const uuid = await v4();
        const link = `${host}/auth/resetpassword/${uuid}`;

        const now = new Date();
        let expiredDate = new Date(now);
        expiredDate.setMinutes(now.getMinutes() + 20);
        expiredDate = expiredDate.toUTCString();

        await Email.create({
          uuid,
          userEmail: user.email,
          expirationDate: expiredDate, // 20 minutes
        });

        return res.json({ link });
      } else {
        console.log("trigger");
        return res
          .status(500)
          .json({ msg: "Email doesn't exist in our database" });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }
);

router.post(
  "/email/password/reset",
  check("newPassword")
    .isLength({ min: 8 })
    .withMessage("Password must be more than 8 characters long")
    .matches(/^.*(?=.{8,100})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/)
    .withMessage(
      "Password must contain at least one uppercase, one lowercase, and one special character"
    ),
  forgetPasswordLimit,
  async (req, res) => {
    try {
      const { newPassword, token } = req.body;

      const email = await Email.findOne({ where: { uuid: token } });

      if (email) {
        if (Date.now() < Date.parse(email.expirationDate)) {
          const user = await User.findOne({
            where: { email: email.userEmail },
          });

          if (user) {
            const hash = await hashPassword(newPassword);
            await user.update({ hash: hash });
            await email.destroy();
            return res.json({ msg: "Password updated" });
          } else {
            return res.status(500).json({ msg: "Reset failed" });
          }
        } else {
          return res.status(500).json({ msg: "Expiration date reached" });
        }
      } else {
        return res.status(500).json({ msg: "Reset failed" });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }
);

module.exports = router;
