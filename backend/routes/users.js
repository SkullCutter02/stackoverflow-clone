const express = require("express");
const { User, Post } = require("../models");

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { id: id },
      include: [Post],
    });
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
});

module.exports = router;
