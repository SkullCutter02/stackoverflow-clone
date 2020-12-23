const express = require("express");
const { Community } = require("../models");

const router = express.Router();

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
