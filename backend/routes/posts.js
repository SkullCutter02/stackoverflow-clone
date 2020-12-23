const express = require("express");
const { User, Post } = require("../models");

const router = express.Router();

router.get("/:uuid", async (req, res) => {
  try {
    const { uuid } = req.params;
    const post = await Post.findOne({
      where: { uuid: uuid },
      include: {
        model: User,
        as: "user",
      },
    });

    if (post) {
      return res.json(post);
    } else {
      return res.status(500).json({ msg: "Post not found" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, body, userUuid } = req.body;
    const user = await User.findOne({
      where: { uuid: userUuid },
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
