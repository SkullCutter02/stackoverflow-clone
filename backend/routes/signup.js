const express = require("express");
const jwt = require("jsonwebtoken");
const { v4 } = require("uuid");
const { User } = require("../models");
const { hashPassword } = require("../hash");

const router = express.Router();

router.post("/", async (req, res) => {
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
        const user = await User.create({ id: v4(), username, email, hash });

        if (user) {
          const id = user.id;
          jwt.sign({ id }, "secretkey", (err, token) => {
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
    return res.status(500).json({ err });
  }
});

module.exports = router;
