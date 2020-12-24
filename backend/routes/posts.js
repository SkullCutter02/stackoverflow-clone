const express = require("express");
const {
  User,
  Post,
  Community,
  Comment,
  PostVote,
  CommentVote,
} = require("../models");

const router = express.Router();

// -- Posts ------------------------------------------------------------------------------------------------------------

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
          include: {
            model: User,
            as: "user",
            attributes: ["uuid", "username", "reputation"],
          },
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

    const user = await User.findOne({ where: { uuid: userUuid } });
    const post = await Post.findOne({
      where: { uuid: uuid },
      include: {
        model: User,
        as: "user",
        attributes: ["uuid", "username"],
      },
    });
    const postUser = await User.findOne({ where: { uuid: post.user.uuid } });
    const voteStatus = await PostVote.findOne({
      where: { userUuid: userUuid, postUuid: uuid },
    });

    if (user) {
      if (user.uuid !== postUser.uuid) {
        if (!voteStatus) {
          await PostVote.create({
            userUuid: userUuid,
            postUuid: uuid,
            voteType: voteType,
          });

          if (voteType === "upvote") {
            await post.update({ votes: parseInt(post.votes) + 1 });
            await postUser.update({
              reputation: parseInt(postUser.reputation) + 1,
            });
          } else if (voteType === "downvote") {
            await post.update({ votes: parseInt(post.votes) - 1 });
            await postUser.update({
              reputation: parseInt(postUser.reputation) - 1,
            });
          } else {
            return res.status(500).json({ msg: "Wrong voting type" });
          }
        } else if (voteStatus.voteType !== voteType) {
          await voteStatus.update({ voteType });

          if (voteType === "upvote") {
            await post.update({ votes: parseInt(post.votes) + 2 });
            await postUser.update({
              reputation: parseInt(postUser.reputation) + 2,
            });
          } else if (voteType === "downvote") {
            await post.update({ votes: parseInt(post.votes) - 2 });
            await postUser.update({
              reputation: parseInt(postUser.reputation) - 2,
            });
          } else {
            return res.status(500).json({ msg: "Wrong voting type" });
          }
        } else {
          return res.json({ msg: "User already voted" });
        }

        return res.json(post);
      } else {
        return res.json({ msg: "You cannot vote on your post" });
      }
    } else {
      return res.status(500).json({ msg: "User doesn't exist" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
});

router.patch("/:uuid", async (req, res) => {
  try {
    const { body, userUuid } = req.body;
    const { uuid } = req.params;

    const post = await Post.findOne({
      where: { uuid: uuid },
      include: { model: User, as: "user", attributes: ["uuid"] },
    });
    const user = await User.findOne({ where: { uuid: userUuid } });

    if (post.user.uuid === user.uuid) {
      await post.update({ body: body });
      return res.json(post);
    } else {
      return res
        .status(403)
        .json({ msg: "You don't have access to edit this post" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
});

router.delete("/:uuid", async (req, res) => {
  try {
    const { userUuid } = req.body;
    const { uuid } = req.params;

    const post = await Post.findOne({
      where: { uuid: uuid },
      include: { model: User, as: "user", attributes: ["uuid"] },
    });
    const user = await User.findOne({ where: { uuid: userUuid } });

    if (post.user.uuid === user.uuid) {
      await post.destroy();
      return res.json({ msg: "Post deleted" });
    } else {
      return res
        .status(500)
        .json({ msg: "You don't have access to delete this post" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
});

// -- Comments ---------------------------------------------------------------------------------------------------------

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
    const { userUuid, voteType } = req.body;
    const { commentUuid } = req.params;

    const user = await User.findOne({ where: { uuid: userUuid } });
    const comment = await Comment.findOne({
      where: { uuid: commentUuid },
      include: {
        model: User,
        as: "user",
        attributes: ["uuid", "username"],
      },
    });
    const commentUser = await User.findOne({
      where: { uuid: comment.user.uuid },
    });
    const voteStatus = await CommentVote.findOne({
      where: { userUuid: userUuid, commentUuid: commentUuid },
    });

    if (user) {
      if (user.uuid !== commentUser.uuid) {
        if (!voteStatus) {
          await CommentVote.create({
            userUuid: userUuid,
            commentUuid: commentUuid,
            voteType: voteType,
          });

          if (voteType === "upvote") {
            await comment.update({ votes: parseInt(comment.votes) + 1 });
            await commentUser.update({
              reputation: parseInt(commentUser.reputation) + 1,
            });
          } else if (voteType === "downvote") {
            await comment.update({ votes: parseInt(comment.votes) - 1 });
            await commentUser.update({
              reputation: parseInt(commentUser.reputation) - 1,
            });
          } else {
            return res.status(500).json({ msg: "Wrong voting type" });
          }
        } else if (voteStatus.voteType !== voteType) {
          await voteStatus.update({ voteType });

          if (voteType === "upvote") {
            await comment.update({ votes: parseInt(comment.votes) + 2 });
            await commentUser.update({
              reputation: parseInt(commentUser.reputation) + 2,
            });
          } else if (voteType === "downvote") {
            await comment.update({ votes: parseInt(comment.votes) - 2 });
            await commentUser.update({
              reputation: parseInt(commentUser.reputation) - 2,
            });
          } else {
            return res.status(500).json({ msg: "Wrong voting type" });
          }
        } else {
          return res.json({ msg: "User already voted" });
        }

        return res.json(comment);
      } else {
        return res.json({ msg: "You cannot vote on your post" });
      }
    } else {
      return res.status(500).json({ msg: "User doesn't exist" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
});

module.exports = router;
