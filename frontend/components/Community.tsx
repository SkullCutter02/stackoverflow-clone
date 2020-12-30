import React from "react";

import Tag from "./Tag";

interface Props {
  uuid: string;
  name: string;
  description: string;
  count: number;
}

const Community: React.FC<Props> = ({ uuid, name, description, count }) => {
  return (
    <React.Fragment>
      <div className="community-container">
        <div className="name-count">
          <Tag name={name} uuid={uuid} />
          <p className="count">Number of Posts: {count}</p>
        </div>
        <p className="description">{description}</p>
      </div>

      <style jsx>{`
        .community-container {
          display: block;
          height: 120px;
          width: 95%;
          margin: 0 auto;
          border-top: 1px solid #ffff;
        }

        .name-count {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 50%;
        }

        .description {
          height: calc(50% - 28px);
          overflow: hidden;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Community;
