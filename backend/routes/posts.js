const express = require("express");
const { User, Post, Community, Comment, PostVote } = require("../models");

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

router.post("/:uuid/vote", async (req, res) => {
  try {
    const { userUuid, voteType } = req.body;
    const { uuid } = req.params;

    const post = await Post.findOne({ where: { uuid: uuid } });
    const voteStatus = await PostVote.findOne({
      where: { userUuid: userUuid, postUuid: uuid },
    });

    if (!voteStatus) {
      await PostVote.create({
        userUuid: userUuid,
        postUuid: uuid,
        voteType: voteType,
      });

      if (voteType === "upvote") {
        await post.update({ votes: parseInt(post.votes) + 1 });
      } else if (voteType === "downvote") {
        await post.update({ votes: parseInt(post.votes) - 1 });
      } else {
        return res.status(500).json({ msg: "Wrong voting type" });
      }
    } else if (voteStatus.voteType !== voteType) {
      await voteStatus.update({ voteType });

      if (voteType === "upvote") {
        await post.update({ votes: parseInt(post.votes) + 1 });
      } else if (voteType === "downvote") {
        await post.update({ votes: parseInt(post.votes) - 1 });
      } else {
        return res.status(500).json({ msg: "Wrong voting type" });
      }
    } else {
      return res.json({ msg: "User already voted" });
    }

    return res.json(post);
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

router.post("/:postUuid/comments/:commentUuid/vote", async (req, res) => {
  try {
    const { voteType } = req.body;
    const { postUuid, commentUuid } = req.params;

    const post = await Post.findOne({ where: { uuid: postUuid } });
    const comment = await Comment.findOne({ where: { uuid: commentUuid } });

    if (post) {
      if (voteType === "upvote") {
        await comment.update({ votes: parseInt(comment.votes) + 1 });
      } else if (voteType === "downvote") {
        await comment.update({ votes: parseInt(comment.votes) - 1 });
      } else {
        return res.status(500).json({ msg: "Wrong voting type" });
      }

      return res.json(comment);
    } else {
      return res.status(500).json({ msg: "Post not found" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
});

module.exports = router;
