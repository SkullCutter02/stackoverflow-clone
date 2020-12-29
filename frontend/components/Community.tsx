import React from "react";

interface Props {
  uuid: string;
  name: string;
  description: string;
  postLength: number;
}

const Community: React.FC<Props> = ({ uuid, name, description }) => {
  return (
    <React.Fragment>
      <div className="community-container">
        <p>{name}</p>
        <p>{description}</p>
      </div>
    </React.Fragment>
  );
};

export default Community;
