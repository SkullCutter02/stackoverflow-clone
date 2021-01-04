import React, { useContext, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

import { QuestionType } from "../utils/types/individualQuestionType";
import { getCookie, updateVote } from "../utils/functions";
import { voteType } from "../utils/types/voteType";
import host from "../utils/host";
import { UserContext } from "../context/UserContext";
import AskedBy from "./AskedBy";
import Tag from "./Tag";

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
      if (userContext.user.uuid !== data.user.uuid) {
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
              votes,
              upvote,
              downvote
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
        alert("You can't vote on your own post!");
      }
    } else {
      await router.push("/auth/signup");
    }
  };

  return (
    <React.Fragment>
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
              <div className="post-body">
                <ReactMarkdown
                  className="preview post-body-mkd"
                  source={data.body}
                  plugins={[remarkGfm]}
                />
              </div>
              <div className="post-body-btm">
                <div className="communities-container">
                  {data.communities.slice(0, 4).map((community) => (
                    <Tag name={community.name} key={community.name} />
                  ))}
                </div>
                <AskedBy
                  username={data.user.username}
                  createdAt={data.createdAt}
                  postUuid={data.user.uuid}
                  userUuid={userContext?.user?.uuid}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .question-container {
          width: 92%;
          margin: 0 auto;
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
          margin: 14px 20px;
        }

        .main-right {
          width: 95%;
        }

        .post-body-btm {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 95%;
          margin-bottom: 20px;
        }

        .communities-container {
          display: flex;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Question;
