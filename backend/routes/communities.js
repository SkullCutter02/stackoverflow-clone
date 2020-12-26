const express = require("express");
const { Community, User, Comment } = require("../models");
const { getRouteLimit } = require("../limiters");

const router = express.Router();

router.get("/", getRouteLimit, async (req, res) => {
  try {
    const { page, limit } = req.query;
    const community = await Community.findAll({
      limit: limit,
      offset: (page - 1) * limit,
    });
    return res.json(community);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
});

router.get("/:uuid", getRouteLimit, async (req, res) => {
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
    return res.status(500).json(err);
  }
});

router.get("/:uuid/posts", getRouteLimit, async (req, res) => {
  try {
    const { uuid } = req.params;
    const { page, limit } = req.query;

    const community = await Community.findOne({ where: { uuid: uuid } });
    const communityPosts = await community.getPosts({
      limit: limit * 1,
      offset: (page - 1) * limit,
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
    });

    if (community) {
      return res.json({
        community,
        posts: communityPosts,
      });
    } else {
      return res.status(500).json({ msg: "Community not found" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.get("/:uuid/posts/count", getRouteLimit, async (req, res) => {
  try {
    const { uuid } = req.params;
    const community = await Community.findOne({ where: { uuid: uuid } });
    const count = await community.getPosts();
    return res.json({ count: count.length });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, description } = req.body;
    const community = await Community.create({ name, description });
    return res.json(community);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.patch("/:uuid", async (req, res) => {
  try {
    const { uuid } = req.params;
    const { name, description } = req.body;
    const community = await Community.findOne({ where: { uuid: uuid } });

    if (name) await community.update({ name });
    if (description) await community.update({ description });

    return res.json(community);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
