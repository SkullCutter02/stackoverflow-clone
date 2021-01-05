import React from "react";

import { QuestionType } from "../utils/types/individualQuestionType";

interface Props {
  question: QuestionType;
}

const Answers: React.FC<Props> = ({ question }) => {
  return (
    <div>
      {question.comments.map((comment) => (
        <div key={comment.uuid}>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Answers;
