import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

interface Props {
  uuid: string;
  type: "question" | "answer";
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const OPActions: React.FC<Props> = ({ uuid, type, setEditMode }) => {
  const style = {
    cursor: "pointer",
    marginRight: "20px",
  };

  const edit = () => {
    setEditMode(true);
  };

  const remove = () => {};

  return (
    <React.Fragment>
      <div className="actions-container">
        <div className="icons-container">
          <FontAwesomeIcon
            icon={faEdit}
            color={"white"}
            style={style}
            size={"1x"}
            onClick={edit}
          />
          <FontAwesomeIcon
            icon={faTrashAlt}
            color={"white"}
            style={style}
            size={"1x"}
            onClick={remove}
          />
        </div>
      </div>

      <style jsx>{`
        .actions-container {
          width: 95%;
        }

        .icons-container {
          float: right;
          margin-top: -10px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default OPActions;
