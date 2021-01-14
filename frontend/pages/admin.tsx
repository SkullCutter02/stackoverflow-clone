import React, { useState, useContext } from "react";
import { useQuery } from "react-query";
import PageHandlers from "../components/PageHandlers";

import host from "../utils/host";
import { UserContext } from "../context/UserContext";

type RequestType = {
  requests: {
    uuid: string;
    name: string;
    link: string;
    createdAt: string;
    updatedAt: string;
  }[];
  hasMore: boolean;
};

const AdminPage = () => {
  const [page, setPage] = useState<number>(1);

  const userContext = useContext(UserContext);

  const fetchRequests = async (page: number) => {
    const res = await fetch(`${host}/requests?page=${page}&limit=20`);
    return await res.json();
  };

  const { isLoading, isError, error, data, isPreviousData } = useQuery<
    RequestType,
    Error
  >(["requests", page], () => fetchRequests(page), {
    keepPreviousData: true,
  });

  if (userContext.user === undefined) {
    return <div />;
  }

  return (
    <React.Fragment>
      {userContext.user.role === "god" ? (
        <div className="admin-area-container">
          {isLoading ? (
            <div>Loading...</div>
          ) : isError ? (
            <div>{error.message}</div>
          ) : (
            <React.Fragment>
              <div className="requests-container">
                {data.requests.map((request) => (
                  <div>{request.uuid}</div>
                ))}
              </div>
              <PageHandlers
                page={page}
                setPage={setPage}
                isPreviousData={isPreviousData}
                hasMore={data.hasMore}
                width={100}
                flex={"flex-start"}
              />
            </React.Fragment>
          )}
        </div>
      ) : (
        <div className="rickroll">
          <img src={"/rick.gif"} alt="rick" />
        </div>
      )}

      <style jsx>{`
        .rickroll {
          margin: 100px auto;
        }

        .rickroll img {
          display: block;
          margin: 0 auto;
        }
      `}</style>
    </React.Fragment>
  );
};

export default AdminPage;
