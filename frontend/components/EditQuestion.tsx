import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { QuestionType } from "../utils/types/individualQuestionType";
import * as css from "../utils/cssVariables";

interface Props {
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  question: QuestionType;
}

const EditQuestion: React.FC<Props> = ({ setEditMode, question }) => {
  const [body, setBody] = useState<string>(question.body);

  const editForm = (e) => {
    e.preventDefault();
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
      </form>

      <style jsx>{`
        .edit-post-container {
          width: 92%;
          margin: 20px auto;
          border: 1px solid red;
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
      `}</style>
    </React.Fragment>
  );
};

export default EditQuestion;
