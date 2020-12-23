const express = require("express");
const { Community, Post, User, Comment } = require("../models");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const community = await Community.findAll();
    return res.json(community);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
});

router.get("/:uuid", async (req, res) => {
  try {
    const { uuid } = req.params;
    const community = await Community.findOne({
      where: { uuid: uuid },
    });

    if (community) {
      return res.json(community);
    } else {
      return res.status(500).json({ msg: "Community not found" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
});

router.get("/:uuid/posts", async (req, res) => {
  try {
    const { uuid } = req.params;
    const community = await Community.findOne({
      where: { uuid: uuid },
      include: [
        {
          model: Post,
          as: "posts",
          through: {
            attributes: [],
          },
          include: [
            {
              model: User,
              as: "user",
              attributes: ["uuid", "username", "reputation"],
            },
            {
              model: Comment,
              as: "comments",
            },
          ],
        },
      ],
    });

    if (community) {
      return res.json(community);
    } else {
      return res.status(500).json({ msg: "Community not found" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, description } = req.body;
    const community = await Community.create({ name, description });
    return res.json(community);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
});

module.exports = router;
