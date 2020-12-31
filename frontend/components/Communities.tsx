import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";

import host from "../utils/host";
import Community from "./Community";
import { CommunitiesType } from "../utils/types/communityType";

interface Props {
  filter: string;
}

const Communities: React.FC<Props> = ({ filter }) => {
  const [page, setPage] = useState<number>(1);

  const fetchCommunities = async (page: number = 1, filter: string = "") => {
    const res = await fetch(
      `${host}/communities?page=${page}&limit=10&filter=${filter}`
    );
    const data: CommunitiesType = await res.json();
    return data;
  };

  const { isLoading, isError, error, data, isPreviousData } = useQuery<
    CommunitiesType,
    Error
  >(["communities", page, filter], () => fetchCommunities(page, filter), {
    keepPreviousData: true,
  });

  useEffect(() => {
    setPage(1);
  }, [filter]);

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

      <style jsx>{`
        .communities-container {
          position: relative;
          margin-bottom: 40px;
          min-height: 20px;
        }

        .page-handlers {
          position: absolute;
          bottom: -20px;
          right: 30px;
          display: flex;
          height: 28px;
          width: calc(100% - 30px);
          justify-content: flex-end;
          align-items: flex-end;
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

export default Communities;
