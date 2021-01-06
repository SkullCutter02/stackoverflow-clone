import React, { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useRouter } from "next/router";

import { CommentType } from "../utils/types/individualQuestionType";
import { VoteType } from "../utils/types/voteType";
import * as css from "../utils/cssVariables";
import AskedBy from "./AskedBy";
import { UserContext } from "../context/UserContext";
import hljs from "highlight.js";
import host from "../utils/host";
import { updateVote, getCookie } from "../utils/functions";

interface Props {
  comment: CommentType;
}

const Answer: React.FC<Props> = ({ comment }) => {
  const [votes, setVotes] = useState<number>(comment.votes);
  const [upvoteColor, setUpvoteColor] = useState<string>("grey");
  const [downvoteColor, setDownvoteColor] = useState<string>("grey");

  const userContext = useContext(UserContext);
  const router = useRouter();

  const style = { cursor: "pointer" };

  useEffect(() => {
    const pres = document.querySelectorAll("pre");

    for (let i = 0; i < pres.length; i++) {
      hljs.highlightBlock(pres[i]);
    }
  }, []);

  useEffect(() => {
    if (userContext.user) {
      fetch(`${host}/posts/comments/${comment.uuid}/vote/status`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userUuid: userContext.user.uuid,
        }),
      })
        .then((res) => res.json())
        .then((data: VoteType) => {
          if (data.status) {
            if (data.type === "upvote") {
              setUpvoteColor(css.upvote);
            } else if (data.type === "downvote") {
              setDownvoteColor(css.downvote);
            }
          }
        });
    }
  }, [userContext]);

  const vote = async (voteType: "upvote" | "downvote") => {
    if (userContext.user) {
      if (userContext.user.uuid !== comment.user.uuid) {
        fetch(`${host}/posts/comments/${comment.uuid}/vote/status`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userUuid: userContext.user.uuid,
          }),
        })
          .then((res) => res.json())
          .then((data: VoteType) =>
            updateVote(
              data,
              voteType,
              setVotes,
              setUpvoteColor,
              setDownvoteColor,
              votes,
              css.upvote,
              css.downvote
            )
          );
        await fetch(`${host}/posts/comments/${comment.uuid}/vote`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getCookie("token")}`,
          },
          body: JSON.stringify({
            userUuid: userContext.user.uuid,
            voteType: voteType,
          }),
        });
      } else {
        alert("You can't vote on your own comment!");
      }
    } else {
      await router.push("/auth/signup");
    }
  };

  return (
    <React.Fragment>
      <div className="answer-container">
        <div className="votes">
          <FontAwesomeIcon
            icon={faSortUp}
            color={upvoteColor}
            style={style}
            size={"2x"}
            onClick={() => vote("upvote")}
          />
          <p
            className="vote-count"
            style={{ color: "#c6c6c6", margin: "-8px 0" }}
          >
            {votes}
          </p>
          <FontAwesomeIcon
            icon={faSortDown}
            color={downvoteColor}
            style={style}
            size={"2x"}
            onClick={() => vote("downvote")}
          />
        </div>
        <div style={{ width: "95%" }}>
          <ReactMarkdown
            className="preview answer-pre"
            source={comment.body}
            plugins={[remarkGfm]}
          />
          <div className="user">
            <AskedBy
              type={"answered"}
              username={comment.user.username}
              createdAt={comment.createdAt}
              postUuid={comment.user.uuid}
              userUuid={userContext?.user?.uuid}
              reputation={comment.user.reputation}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .answer-container {
          width: 100%;
          margin-bottom: 30px;
          padding: 5px 5px 20px;
          border-radius: 10px;
          background: ${css.floatingPostBackground};
          position: relative;
          display: flex;
        }

        .user {
          position: absolute;
          bottom: 10px;
          right: 5px;
        }

        .votes {
          width: 5%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          margin-top: 14px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Answer;
