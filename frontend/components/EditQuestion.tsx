import React, { useState, useContext } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { QuestionType } from "../utils/types/individualQuestionType";
import * as css from "../utils/cssVariables";
import host from "../utils/host";
import { getCookie } from "../utils/functions";
import { UserContext } from "../context/UserContext";

interface Props {
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  question: QuestionType;
}

const EditQuestion: React.FC<Props> = ({ setEditMode, question }) => {
  const [body, setBody] = useState<string>(question.body);
  const [text, setText] = useState<string>("Save");

  const userContext = useContext(UserContext);

  const editForm = (e) => {
    e.preventDefault();

    if (userContext.user) {
      const spinner = document.getElementById("spinner") as HTMLDivElement;
      spinner.style.display = "block";
      setText("");

      fetch(`${host}/posts/${question.uuid}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("token")}`,
        },
        body: JSON.stringify({
          body: body,
          userUuid: userContext.user.uuid,
        }),
      }).then((res) => {
        if (res.status >= 200 && res.status < 300) {
          setEditMode(false);
          window.scrollBy(0, -1000);
        } else {
          alert("Something went wrong");
          setText("Save");
          spinner.style.display = "none";
        }
      });
    }
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
          <button className="save" id="save">
            {text}
            <div id="spinner" className="smt-spinner-circle">
              <div className="smt-spinner" />
            </div>
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
          width: 80px;
          height: 25px;
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

        .smt-spinner-circle {
          width: 17px;
          height: 17px;
          position: relative;
          border-radius: 50%;
          margin: 0 auto;
          display: none;
        }

        .smt-spinner {
          height: 100%;
          width: 100%;
          border-radius: 50%;
          border-right: 2px solid rgba(255, 255, 255, 0.6);
          border-top: 2px solid #bababa;
          border-left: 2px solid #dedede;
          border-bottom: 2px solid #ffffff;
          animation: rotate--spinner 1.6s infinite;
        }

        @keyframes rotate--spinner {
          from {
            transform: rotate(0);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default EditQuestion;
