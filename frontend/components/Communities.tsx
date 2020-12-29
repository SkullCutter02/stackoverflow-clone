import React, { useState } from "react";
import { useQuery } from "react-query";

import host from "../utils/host";
import Community from "./Community";

type PostType = {
  uuid: string;
};

type CommunityType = {
  uuid: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  posts: PostType[];
};

type DataType = {
  communities: CommunityType[];
  hasMore: boolean;
};

const Communities: React.FC = () => {
  const [page, setPage] = useState<number>(1);

  const fetchCommunities = async (page: number = 1) => {
    const res = await fetch(`${host}/communities?page=${page}&limit=5`);
    const data: DataType = await res.json();
    return data;
  };

  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
  } = useQuery<DataType, Error>(
    ["communities", page],
    () => fetchCommunities(page),
    {
      keepPreviousData: true,
    }
  );

  return (
    <React.Fragment>
      <div className="communities-container">
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          <React.Fragment>
            {data.communities.map((community) => (
              <Community
                uuid={community.uuid}
                name={community.name}
                description={community.description}
                count={community.posts.length}
                key={community.uuid}
              />
            ))}
            <span>Current Page: {page}</span>
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
          </React.Fragment>
        )}
        {isFetching ? <span>Loading...</span> : null}
      </div>
    </React.Fragment>
  );
};

export default Communities;
