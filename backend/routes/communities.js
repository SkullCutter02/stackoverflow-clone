const express = require("express");
const { Community, User, Comment, Post } = require("../models");
const { getRouteLimit } = require("../limiters");
const { comparePassword } = require("../hash");

const router = express.Router();

function limit(c) {
  return this.filter((x, i) => {
    if (i <= c - 1) {
      return true;
    }
  });
}

function skip(c) {
  return this.filter((x, i) => {
    if (i > c - 1) {
      return true;
    }
  });
}

Array.prototype.limit = limit;
Array.prototype.skip = skip;

router.get("/", getRouteLimit, async (req, res) => {
  try {
    const { page, limit } = req.query;
    // let communities = await Community.findAll({
    //   limit: limit,
    //   offset: (page - 1) * limit,
    //   include: { model: Post, as: "posts", attributes: ["uuid"] },
    // });
    // communities = communities.sort((a, b) => a.posts.length - b.posts.length);
    const tempCommunities = await Community.findAll({
      include: {
        model: Post,
        as: "posts",
        through: { attributes: [] },
        attributes: ["uuid"],
      },
    });
    const communities = tempCommunities
      .sort((a, b) => b.posts.length - a.posts.length)
      .skip((page - 1) * limit)
      .limit(limit);

    return res.json({
      communities,
      hasMore: tempCommunities.length > page * limit,
    });
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
    const { name, description, email, password } = req.body;
    const user = await User.findOne({ where: { email: email } });
    const isValidPass = await comparePassword(password, user.hash);

    if (isValidPass && user.role === "god") {
      const community = await Community.create({ name, description });
      return res.json(community);
    } else {
      return res.status(403).json({ msg: "Forbidden access" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.patch("/:uuid", async (req, res) => {
  try {
    const { uuid } = req.params;
    const { name, description, email, password } = req.body;
    const community = await Community.findOne({ where: { uuid: uuid } });

    const user = await User.findOne({ where: { email: email } });
    const isValidPass = await comparePassword(password, user.hash);

    if (isValidPass && user.role === "god") {
      if (name) await community.update({ name });
      if (description) await community.update({ description });
      return res.json(community);
    } else {
      return res.status(403).json({ msg: "Forbidden access" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.delete("/:uuid", async (req, res) => {
  try {
    const { uuid } = req.params;
    const community = await Community.findOne({ where: { uuid: uuid } });

    const user = await User.findOne({ where: { email: email } });
    const isValidPass = await comparePassword(password, user.hash);

    if (isValidPass && user.role === "god") {
      await community.destroy();
      return res.json({ msg: "Community deleted" });
    } else {
      return res.status(403).json({ msg: "Forbidden access" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
