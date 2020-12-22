const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { v4 } = require("uuid");
const { sequelize, User } = require("./models");
const { hashPassword, comparePassword } = require("./hash");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(cookieParser());

app.post("/signup", async (req, res) => {
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
      const user = await User.create({ username, email, hash, id: v4() });

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
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
  sequelize
    .authenticate()
    .then(console.log("Database Connected!"))
    .catch((err) => console.log(err));
});
