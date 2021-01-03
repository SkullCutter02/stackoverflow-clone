import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";

import { QuestionType } from "../utils/types/individualQuestionType";
import Aside from "./Aside";

interface Props {
  data: QuestionType;
}

const Question: React.FC<Props> = ({ data }) => {
  const style = { cursor: "pointer" };

  const vote = (voteType: "upvote" | "downvote") => {
    console.log(voteType);
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
                color={"grey"}
                style={style}
                size={"2x"}
                onClick={() => vote("upvote")}
              />
              <p
                className="vote-count"
                style={{ color: "#c6c6c6", margin: "-8px 0" }}
              >
                {data.votes}
              </p>
              <FontAwesomeIcon
                icon={faSortDown}
                color={"grey"}
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
