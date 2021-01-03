import React, { useContext, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

import { QuestionType } from "../utils/types/individualQuestionType";
import Aside from "./Aside";
import host from "../utils/host";
import { UserContext } from "../context/UserContext";
import { getCookie } from "../utils/functions";
import { voteType } from "../utils/types/voteType";
import { updateVote } from "../utils/functions";

interface Props {
  data: QuestionType;
}

const Question: React.FC<Props> = ({ data }) => {
  const [votes, setVotes] = useState<number>(data.votes);
  const [upvoteColor, setUpvoteColor] = useState<string>("grey");
  const [downvoteColor, setDownvoteColor] = useState<string>("grey");

  const userContext = useContext(UserContext);
  const router = useRouter();

  const upvote = "#ff4400";
  const downvote = "#7193ff";

  const style = { cursor: "pointer" };

  useEffect(() => {
    if (userContext.user) {
      fetch(`${host}/posts/${data.uuid}/vote/status`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userUuid: userContext.user.uuid,
        }),
      })
        .then((res) => res.json())
        .then((data2: voteType) => {
          if (data2.status) {
            if (data2.type === "upvote") {
              setUpvoteColor(upvote);
            } else if (data2.type === "downvote") {
              setDownvoteColor(downvote);
            }
          }
        });
    }
  }, [userContext]);

  const vote = async (voteType: "upvote" | "downvote") => {
    if (userContext.user) {
      fetch(`${host}/posts/${data.uuid}/vote/status`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userUuid: userContext.user.uuid,
        }),
      })
        .then((res) => res.json())
        .then((data2: voteType) =>
          updateVote(
            data2,
            voteType,
            setVotes,
            setUpvoteColor,
            setDownvoteColor,
            votes
          )
        );
      await fetch(`${host}/posts/${data.uuid}/vote`, {
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
      await router.push("/auth/signup");
    }
  };

  return (
    <React.Fragment>
      <h1>{data.title}</h1>
      <div className="h1-border-btm" />
      <main>
        <div className="question-container">
          <div className="main">
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
            <div className="main-right">
              <ReactMarkdown source={data.body} plugins={[remarkGfm]} />
            </div>
          </div>
        </div>
        <Aside borderSide={"left"} />
      </main>

      <style jsx>{`
        main {
          display: flex;
          justify-content: space-between;
        }

        .question-container {
          width: 73%;
          margin: 0 auto;
        }

        h1 {
          font-size: 1.3rem;
          line-height: 1.4em;
          margin: 20px auto;
          width: 88%;
        }

        .h1-border-btm {
          width: 93%;
          margin: 0 auto;
          border-bottom: 1px solid #fff;
        }

        .main {
          display: flex;
          margin: 20px 0;
        }

        .votes {
          width: 5%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          margin-right: 10px;
        }

        .main-right {
          width: 95%;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Question;
