import React, { useState } from "react";
import { useQuery } from "react-query";

import host from "../utils/host";

type CommunityType = {
  uuid: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

type DataType = {
  communities: CommunityType[];
  hasMore: boolean;
};

const Communities: React.FC = () => {
  const [page, setPage] = useState<number>(1);

  const fetchCommunities = async (page: number = 1) => {
    const res = await fetch(`${host}/communities?page=${page}&limit=5`);
    return await res.json();
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

  // // testing
  // React.useEffect(() => {
  //   console.log(data);
  // }, [data]);

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
              <div className="community-container" key={community.uuid}>
                <p>{community.name}</p>
                <p>{community.description}</p>
              </div>
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
