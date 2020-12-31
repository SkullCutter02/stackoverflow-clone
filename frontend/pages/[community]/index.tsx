import React, { useState } from "react";
import { useQuery } from "react-query";
import { GetServerSideProps } from "next";

import host from "../../utils/host";
import { CommunityPostsType } from "../../utils/types/postType";
import Aside from "../../components/Aside";
import * as css from "../../utils/cssVariables";

interface Props {
  community: string;
}

const CommunityPostPage: React.FC<Props> = ({ community }) => {
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
        <h1>{data?.community.name}</h1>
        <p>{data?.community.description}</p>
      </div>
      <div className="community-post-page-container">
        <div className="posts-container">
          {isLoading ? (
            <div>Loading...</div>
          ) : isError ? (
            <div>{error.message}</div>
          ) : (
            <React.Fragment>
              {data.posts.map((post) => (
                <div key={post.uuid}>
                  <p>{post.title}</p>
                  <p>{post.body}</p>
                  <p>{post.user.username}</p>
                </div>
              ))}
              <div className="page-handlers">
                <p className="current-page">Current Page: {page}</p>
                <button
                  onClick={() => setPage((old) => Math.max(old - 1, 0))}
                  disabled={page === 1}
                >
                  Previous Page
                </button>
                <button
                  onClick={() => {
                    if (!isPreviousData && data.hasMore) {
                      setPage((old) => old + 1);
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
          height: 140px;
          width: 100%;
          background: ${css.headerBackground};
        }

        .community-post-page-container {
          display: flex;
          width: 100%;
        }

        .posts-container {
          width: 80%;
        }
      `}</style>
    </React.Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      community: context.params.community,
    },
  };
};

export default CommunityPostPage;
