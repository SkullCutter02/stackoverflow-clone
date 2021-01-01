import React from "react";
import { useQuery } from "react-query";
import { GetServerSideProps } from "next";

import host from "../../../utils/host";
import { QuestionType } from "../../../utils/types/individualQuestionType";
import Question from "../../../components/Question";

interface Props {
  uuid: string;
}

const QuestionPage: React.FC<Props> = ({ uuid }) => {
  const fetchQuestions = async () => {
    const res = await fetch(`${host}/posts/${uuid}`);
    return await res.json();
  };

  const { isLoading, isError, error, data } = useQuery<QuestionType, Error>(
    ["individual-question"],
    () => fetchQuestions(),
    { cacheTime: 0 }
  );

  return (
    <React.Fragment>
      <main>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>{error.message}</div>
        ) : (
          <Question data={data} />
        )}
      </main>
    </React.Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      uuid: context.params.uuid,
    },
  };
};

export default QuestionPage;
