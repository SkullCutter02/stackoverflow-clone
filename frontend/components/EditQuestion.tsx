import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { QuestionType } from "../utils/types/individualQuestionType";
import * as css from "../utils/cssVariables";
import host from "../utils/host";
import { getCookie } from "../utils/functions";

interface Props {
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  question: QuestionType;
}

const EditQuestion: React.FC<Props> = ({ setEditMode, question }) => {
  const [body, setBody] = useState<string>(question.body);

  const editForm = async (e) => {
    e.preventDefault();

    await fetch(`${host}/posts/${question.uuid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
      body: JSON.stringify({
        body: body,
      }),
    });
  };

  return (
    <React.Fragment>
      <form className="edit-post-container" onSubmit={editForm}>
        <textarea
          id="edit-form-body"
          cols={30}
          rows={10}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <ReactMarkdown
          className="preview edit-post-preview"
          source={body}
          plugins={[remarkGfm]}
        />
        <div className="buttons-container">
          <button
            // onClick={() => {
            //   setEditMode(false);
            //   window.scrollBy(0, -1000);
            // }}
            className="save"
          >
            Save
          </button>
          <button
            onClick={() => {
              const confirm = window.confirm(
                "Are you sure to discard your changes?"
              );
              if (confirm) {
                setEditMode(false);
                window.scrollTo(0, -1000);
              }
            }}
            className="cancel"
          >
            Cancel
          </button>
        </div>
      </form>

      <style jsx>{`
        .edit-post-container {
          width: 92%;
          margin: 20px auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        #edit-form-body {
          width: 90%;
          resize: none;
          height: 400px;
          margin-bottom: 20px;
          background: ${css.inputBackground};
          border: 2px solid ${css.inputBorder};
          color: #fff;
          padding: 15px;
        }

        .buttons-container {
          width: 90%;
          display: flex;
          justify-content: flex-end;
        }

        button {
          margin-left: 20px;
          border: none;
          border-radius: 4px;
          padding: 5px 20px;
          cursor: pointer;
          color: #fff;
          font-size: 0.8rem;
        }

        .save {
          background: ${css.mainButton};
        }

        .save:hover {
          background: ${css.mainButtonHover};
        }

        .cancel {
          background: ${css.cancelButton};
        }

        .cancel:hover {
          background: ${css.cancelButtonHover};
        }
      `}</style>
    </React.Fragment>
  );
};

export default EditQuestion;
