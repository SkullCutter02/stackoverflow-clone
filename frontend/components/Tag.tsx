import React from "react";

import { tagBackground } from "../utils/cssVariables";

interface Props {
  name: string;
}

const Tag: React.FC<Props> = ({ name }) => {
  return (
    <React.Fragment>
      <span className="background">
        <p className="name">{name}</p>
      </span>

      <style jsx>{`
        .background {
          background: ${tagBackground};
          border-radius: 4px;
          cursor: pointer;
        }

        .background:hover {
          background: #3e3e3e;
        }

        .name {
          padding: 2px 7px;
        }

        .name:hover {
          color: #c6c6c6;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Tag;
