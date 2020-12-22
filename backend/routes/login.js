const express = require("express");
const jwt = require("jsonwebtoken");
const { User } = require("../models");
const { comparePassword } = require("../hash");

const router = express.Router();

router.post("/", async (req, res) => {
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
        jwt.sign({ id: user.id }, "secretkey", (err, token) => {
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
    return res.status(500).json({ err });
  }
});

module.exports = router;
