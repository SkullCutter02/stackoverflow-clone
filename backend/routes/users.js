const express = require("express");
const { User, Post, Community, Comment } = require("../models");
const { getRouteLimit } = require("../middleware/limiters");

const router = express.Router();

router.get("/:identifier", getRouteLimit, async (req, res) => {
  try {
    const { identifier } = req.params;
    const user = await User.findOne({
      where: { username: identifier },
    });

    if (user) {
      return res.json(user);
    } else {
      const userByUuid = await User.findOne({
        where: { uuid: identifier },
      });
      return res.json(userByUuid);
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.get("/:uuid/posts", getRouteLimit, async (req, res) => {
  try {
    const { uuid } = req.params;
    const user = await User.findOne({
      where: { uuid: uuid },
      include: [
        {
          model: Post,
          as: "posts",
          include: [
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
        },
      ],
    });
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.get("/:uuid/comments", getRouteLimit, async (req, res) => {
  try {
    const { uuid } = req.params;
    const user = await User.findOne({
      where: { uuid: uuid },
      include: [
        {
          model: Comment,
          as: "comments",
          include: [
            {
              model: Post,
              as: "post",
            },
          ],
        },
      ],
    });
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
