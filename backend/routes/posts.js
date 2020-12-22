const express = require("express");
const { User, Post } = require("../models");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { title, body, userId } = req.body;
    const user = await User.findOne({
      where: { id: userId },
    });

    if (user) {
      const post = await Post.create({
        title,
        body,
        userId: user.id,
      });
      return res.json(post);
    } else {
      return res.status(500).json({ msg: "User doesn't exist" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
});

module.exports = router;
