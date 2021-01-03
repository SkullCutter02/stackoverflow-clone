import React from "react";

import { getTime } from "../utils/functions";

interface Props {
  username: string;
  createdAt: string;
  postUuid: string;
  userUuid: string;
}

const AskedBy: React.FC<Props> = ({
  username,
  createdAt,
  postUuid,
  userUuid,
}) => {
  return (
    <React.Fragment>
      <span>
        <i className="asked-by">
          asked by: <span className="username">{username}</span>
          <span className="time"> {getTime(createdAt)}</span>
        </i>
      </span>

      <style jsx>{`
        .asked-by {
          font-size: 0.9rem;
          color: #fff;
          margin-right: 15px;
        }

        .asked-by .username {
          color: ${postUuid === userUuid ? "#3ca4ff" : "#fff"};
          cursor: pointer;
        }
      `}</style>
    </React.Fragment>
  );
};

export default AskedBy;
