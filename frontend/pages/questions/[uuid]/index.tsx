import React from "react";
import { useQuery } from "react-query";
import { GetServerSideProps } from "next";

import host from "../../../utils/host";
import { QuestionType } from "../../../utils/types/individualQuestionType";
import Question from "../../../components/Question";
import Reply from "../../../components/Reply";
import Aside from "../../../components/Aside";

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
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>{error.message}</div>
        ) : (
          <React.Fragment>
            <h1>{data.title}</h1>
            <div className="h1-border-btm" />
            <main>
              <div className="left">
                <Question data={data} />
                <Reply question={data} />
              </div>
              <Aside borderSide={"left"} />
            </main>
          </React.Fragment>
        )}
      </div>

      <style jsx>{`
        h1 {
          font-size: 1.3rem;
          line-height: 1.4em;
          margin: 20px auto;
          width: 88%;
        }

        .h1-border-btm {
          width: 96%;
          margin: 0 auto;
          border-bottom: 1px solid #fff;
        }

        main {
          display: flex;
          justify-content: space-between;
        }

        .left {
          width: 80%;
        }
      `}</style>
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
