import React from "react";

import * as css from "../utils/cssVariables";

const Reply: React.FC = () => {
  return (
    <React.Fragment>
      <div className="reply-container">
        <form>
          <textarea
            id="reply"
            className="reply-form-textarea"
            required
            placeholder={"Reply to this question"}
          />
        </form>
      </div>

      <style jsx>{`
        .reply-form-textarea {
          width: 80%;
          resize: none;
          display: block;
          height: 120px;
          margin: 30px auto;
          background: ${css.inputBackground};
          color: #ffffff;
          border: 2px solid ${css.inputBorder};
          padding: 15px;
        }

        .reply-form-textarea:focus {
          height: 200px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Reply;
