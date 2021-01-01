import React from "react";

import { QuestionType } from "../utils/types/individualQuestionType";

interface Props {
  data: QuestionType;
}

const Question: React.FC<Props> = ({ data }) => {
  return <div>{data.uuid}</div>;
};

export default Question;
