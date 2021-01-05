import React, { useEffect, useContext, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import hljs from "highlight.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";

import { QuestionType } from "../utils/types/individualQuestionType";
import * as css from "../utils/cssVariables";
import AskedBy from "./AskedBy";
import { UserContext } from "../context/UserContext";

interface Props {
  question: QuestionType;
}

const Answers: React.FC<Props> = ({ question }) => {
  const [votes, setVotes] = useState<number>(question.votes);
  const [upvoteColor, setUpvoteColor] = useState<string>("grey");
  const [downvoteColor, setDownvoteColor] = useState<string>("grey");

  const userContext = useContext(UserContext);

  const style = { cursor: "pointer" };

  useEffect(() => {
    const pres = document.querySelectorAll("pre");

    for (let i = 0; i < pres.length; i++) {
      hljs.highlightBlock(pres[i]);
    }
  }, []);

  const vote = (voteType: "upvote" | "downvote") => {};

  return (
    <React.Fragment>
      <div className="answers-container">
        {question.comments.map((comment) => (
          <div className="answer-container" key={comment.uuid}>
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
        ))}
      </div>

      <style jsx>{`
        .answers-container {
          width: 85%;
          margin: 0 auto 70px;
        }

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

export default Answers;
