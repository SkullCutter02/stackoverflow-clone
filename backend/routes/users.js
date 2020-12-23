const express = require("express");
const { User, Post, Community } = require("../models");

const router = express.Router();

router.get("/:uuid", async (req, res) => {
  try {
    const { uuid } = req.params;
    const user = await User.findOne({
      where: { uuid: uuid },
      include: [
        {
          model: Post,
          as: "posts",
          include: {
            model: Community,
            as: "communities",
            through: { attributes: [] },
          },
        },
      ],
    });
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
});

module.exports = router;
