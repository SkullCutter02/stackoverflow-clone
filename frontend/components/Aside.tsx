import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

import * as css from "../utils/cssVariables";
import { getCookie } from "../utils/functions";

const Aside: React.FC = () => {
  return (
    <React.Fragment>
      <Link href={getCookie("token") ? "/request/post" : "/auth/signup"}>
        <button className="section-btn ask-question-btn">
          <FontAwesomeIcon icon={faPencilAlt} color={"white"} /> Ask a Question
        </button>
      </Link>
      <Link href={"/request/community"}>
        <button className="section-btn request-community-btn">
          <FontAwesomeIcon icon={faTags} color={"white"} /> Request a Community
        </button>
      </Link>

      <style jsx>{`
        .section-btn {
          background-color: ${css.mainButton};
          border: 1.5px solid ${css.buttonBorder};
          color: ${css.mainButtonText};
          height: 30px;
          width: 56%;
          font-size: 0.6rem;
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
