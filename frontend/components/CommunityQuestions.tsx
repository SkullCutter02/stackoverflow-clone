import React, { useState } from "react";
import { useQuery } from "react-query";

import host from "../utils/host";
import { CommunityPostsType } from "../utils/types/questionType";
import CommunityQuestion from "./CommunityQuestion";
import Aside from "./Aside";
import * as css from "../utils/cssVariables";

interface Props {
  community: string;
}

const CommunityQuestions: React.FC<Props> = ({ community }) => {
  const [page, setPage] = useState<number>(1);

  const fetchPosts = async (page: number) => {
    const res = await fetch(
      `${host}/communities/${community}/posts?page=${page}&limit=10`
    );
    const data: CommunityPostsType = await res.json();
    return data;
  };

  const { isLoading, isError, error, data, isPreviousData } = useQuery<
    CommunityPostsType,
    Error
  >(["community-posts", page], () => fetchPosts(page), {
    keepPreviousData: true,
    cacheTime: 0,
  });

  return (
    <React.Fragment>
      <div className="community-post-header-container">
        <h1 className="header-title">{data?.community.name}</h1>
        <p className="header-description">{data?.community.description}</p>
      </div>
      <div className="community-post-page-container">
        <div className="posts-container">
          {isLoading ? (
            <div>Loading...</div>
          ) : isError ? (
            <div>{error.message}</div>
          ) : (
            <React.Fragment>
              <div className="community-posts-container">
                {data.posts
                  .sort((a, b) => {
                    const dateA = Date.parse(a.createdAt);
                    const dateB = Date.parse(b.createdAt);
                    return dateB > dateA ? 1 : -1;
                  })
                  .map((post) => (
                    <CommunityQuestion post={post} key={post.uuid} />
                  ))}
              </div>
              <div className="page-handlers">
                <p className="current-page">Current Page: {page}</p>
                <button
                  onClick={() => {
                    setPage((old) => Math.max(old - 1, 0));
                    window.scrollTo(0, -500);
                  }}
                  disabled={page === 1}
                >
                  Previous Page
                </button>
                <button
                  onClick={() => {
                    if (!isPreviousData && data.hasMore) {
                      setPage((old) => old + 1);
                      window.scrollTo(0, -500);
                    }
                  }}
                  disabled={isPreviousData || !data.hasMore}
                >
                  Next Page
                </button>
              </div>
            </React.Fragment>
          )}
        </div>
        <Aside borderSide={"left"} />
      </div>

      <style jsx>{`
        .community-post-header-container {
          //height: 140px;
          width: 100%;
          background: ${css.headerBackground};
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .header-title,
        .header-description {
          width: 90%;
        }

        .header-title {
          margin: 20px 0;
        }

        .header-description {
          margin-bottom: 20px;
        }

        .community-post-page-container {
          display: flex;
          width: 100%;
        }

        .posts-container {
          width: 80%;
        }

        .community-posts-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .page-handlers {
          width: 90%;
          margin: 30px auto;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          height: 30px;
        }

        button {
          height: 70%;
          width: 90px;
          margin: 0 5px;
          font-size: 0.6rem;
        }
      `}</style>
    </React.Fragment>
  );
};

export default CommunityQuestions;
