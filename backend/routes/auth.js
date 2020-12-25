const express = require("express");
const jwt = require("jsonwebtoken");
const { v4 } = require("uuid");
const { User } = require("../models");
const { hashPassword, comparePassword } = require("../hash");
const transporter = require("../transporter");

const router = express.Router();

router.post("/signup", async (req, res) => {
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
                res.cookie("token", token, { maxAge: 31536000000 });
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
});

router.post("/login", async (req, res) => {
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
              res.cookie("token", token, { maxAge: 31536000000 });
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

router.post("/email/password/reset/send", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ where: { email: email } });

    if (user) {
      const host =
        process.env.NODE_ENV === "development" ? "http://localhost:3000" : "";
      const link = `${host}/${v4()}/${user.uuid}/auth/password/reset`;

      const message = {
        from: "coolalan2016@gmail.com",
        to: email,
        subject: "Password reset link",
        text: `Click here to reset your password: ${link}`,
        html: `<p>Click here to reset your password: ${link}</p>`,
      };

      transporter.sendMail(message, (err, info) => {
        if (err) {
          console.log(err);
          return res.status(500).json(err);
        }

        return res.json(info);
      });
    } else {
      return res.status(500).json({ msg: "Email doesn't exist" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.post("/email/password/reset", async (req, res) => {
  try {
    const { newPassword, uuid } = req.body;
    const user = await User.findOne({ where: { uuid: uuid } });

    if (user) {
      const hash = await hashPassword(newPassword);
      await user.update({ hash: hash });
      return res.json({ msg: "Password updated" });
    } else {
      return res.status(500).json({ msg: "User doesn't exist" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
