import React from "react";

import * as css from "../utils/cssVariables";

const Aside: React.FC = () => {
  return (
    <React.Fragment>
      <button className="section-btn ask-question-btn">
        <i className="fas fa-pencil-alt" /> Ask a Question
      </button>
      <button className="section-btn request-community-btn">
        <i className="fas fa-tags" /> Request a Community
      </button>

      <style jsx>{`
        .section-btn {
          background-color: ${css.mainButton};
          border: 1.5px solid ${css.buttonBorder};
          color: ${css.mainButtonText};
          height: 35px;
          width: 60%;
          font-size: 70%;
          cursor: pointer;
          border-radius: 5px;
          margin-top: 40px;
        }

        .section-btn:hover {
          background-color: ${css.mainButtonHover};
          color: ${css.mainButtonTextHover};
        }
      `}</style>
    </React.Fragment>
  );
};

export default Aside;
