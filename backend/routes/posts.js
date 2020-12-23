const express = require("express");
const { User, Post, Community, Comment } = require("../models");

const router = express.Router();

router.get("/:uuid", async (req, res) => {
  try {
    const { uuid } = req.params;
    const post = await Post.findOne({
      where: { uuid: uuid },
      include: [
        {
          model: User,
          as: "user",
          attributes: ["uuid", "username", "reputation"],
        },
        {
          model: Community,
          as: "communities",
          through: { attributes: [] },
        },
        {
          model: Comment,
          as: "comments",
        },
      ],
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
    const { title, body, userUuid, communities } = req.body;
    const user = await User.findOne({
      where: { uuid: userUuid },
    });

    if (user) {
      const post = await Post.create({
        title,
        body,
        userId: user.id,
      });

      if (
        communities !== undefined &&
        communities !== null &&
        communities.length > 0
      ) {
        post.setCommunities(communities);
      }

      return res.json(post);
    } else {
      return res.status(500).json({ msg: "User doesn't exist" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
});

router.post("/:uuid/comments", async (req, res) => {
  try {
    const { body, userUuid } = req.body;
    const { uuid } = req.params;

    const user = await User.findOne({ where: { uuid: userUuid } });
    const post = await Post.findOne({ where: { uuid: uuid } });

    if (user && post) {
      const comment = await Comment.create({
        body,
        userId: user.id,
        postId: post.id,
      });
      return res.json({ comment });
    } else {
      return res.status(500).json({ msg: "User or post not found" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
});

module.exports = router;
