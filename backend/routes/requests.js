const express = require("express");
const { Request, Community } = require("../models");
const verifyToken = require("../middleware/verifyToken");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { page, limit } = req.query;

    const requests = await Request.findAll({
      limit: limit * 1,
      offset: (page - 1) * limit,
    });
    const tempRequests = await Request.findAll();

    return res.json({ requests, hasMore: tempRequests.length > page * limit });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.post("/", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", async (err, authData) => {
    if (err) {
      return res.status(500).json(err);
    } else {
      try {
        const { name, link } = req.body;

        const findRequest = await Request.findOne({ where: { name: name } });
        const findCommunity = await Community.findOne({
          where: { name: name },
        });

        if (findRequest) {
          return res
            .status(500)
            .json({ msg: "Community request already sent!" });
        } else if (findCommunity) {
          return res
            .status(500)
            .json({ msg: "Community of the same name already exists!" });
        } else {
          const request = await Request.create({ name, link });
          return res.json(request);
        }
      } catch (err) {
        console.log(err);
        return res.status(500).json(err);
      }
    }
  });
});

module.exports = router;
