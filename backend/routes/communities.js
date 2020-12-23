const express = require("express");
const { Community, Post, User } = require("../models");

const router = express.Router();

router.get("/:uuid", async (req, res) => {
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
          include: {
            model: User,
            as: "user",
            attributes: ["uuid", "username", "reputation"],
          },
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
