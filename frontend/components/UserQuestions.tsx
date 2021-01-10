import React, { useState } from "react";
import { useQuery } from "react-query";

import host from "../utils/host";
import { UserPostsType } from "../utils/types/userPostsType";

interface Props {
  uuid: string;
}

const UserQuestions: React.FC<Props> = ({ uuid }) => {
  const [page, setPage] = useState<number>(1);

  const fetchUserPosts = async (page: number) => {
    const res = await fetch(
      `${host}/users/${uuid}/posts?page=${page}&limit=20`
    );
    return await res.json();
  };

  const { isLoading, isError, error, data, isPreviousData } = useQuery<
    UserPostsType,
    Error
  >(["user-posts", page], () => fetchUserPosts(page), {
    keepPreviousData: true,
    cacheTime: 0,
  });

  return (
    <React.Fragment>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>{error.message}</div>
      ) : (
        <div className="user-posts-container">
          {data.posts.map((post) => (
            <div>{post.uuid}</div>
          ))}
          <div className="page-handlers">
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
        </div>
      )}
    </React.Fragment>
  );
};

export default UserQuestions;
