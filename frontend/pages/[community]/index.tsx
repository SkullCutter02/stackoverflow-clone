import React, { useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { GetServerSideProps } from "next";

import host from "../../utils/host";
import { CommunityPostsType } from "../../utils/types/postType";

interface Props {
  community: string;
}

const CommunityPostPage: React.FC<Props> = ({ community }) => {
  const [page, setPage] = useState<number>(1);
  const router = useRouter();

  const fetchPosts = async (page: number) => {
    const res = await fetch(
      `${host}/communities/${community}/posts?page=${page}&limit=10`
    );
    const data: CommunityPostsType = await res.json();
    return data;
  };

  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
  } = useQuery<CommunityPostsType, Error>(
    ["community-posts", page],
    () => fetchPosts(page),
    {
      keepPreviousData: true,
    }
  );

  return (
    <React.Fragment>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>{error.message}</div>
        ) : (
          data.posts.map((post) => (
            <div key={post.uuid}>
              <p>{post.title}</p>
              <p>{post.body}</p>
              <p>{post.user.username}</p>
            </div>
          ))
        )}
      </div>
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
