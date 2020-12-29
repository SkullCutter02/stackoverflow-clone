import React, { ChangeEvent, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import * as css from "../../utils/cssVariables";

const RequestPostPage: React.FC = () => {
  const [body, setBody] = useState<string>("**Hello World!**");

  return (
    <React.Fragment>
      <h1 className="post-form-heading">Ask a Question</h1>
      <form className="post-form-container">
        <input
          type="text"
          className="post-form-input"
          id="title"
          placeholder="Title"
          required
        />
        <textarea
          id="body"
          className="post-form-body"
          cols={30}
          rows={10}
          placeholder="Body"
          required
          value={body}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setBody(e.target.value)
          }
        />
        <ReactMarkdown
          className="preview"
          plugins={[remarkGfm]}
          source={body}
        />
        <div className="tags"></div>
      </form>

      <style jsx>{`
        .post-form-heading {
          text-align: center;
          margin: 30px 0;
        }

        .post-form-container {
          width: 65%;
          min-height: 500px;
          border-radius: 20px;
          margin: 0 auto 50px;
          background: #3b3b3b;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        input,
        textarea {
          display: block;
        }

        .post-form-input {
          display: block;
          width: 80%;
          height: 40px;
          margin: 30px 0;
          text-indent: 15px;
          background: ${css.inputBackground};
          color: #ffffff;
          border: 2px solid ${css.inputBorder};
          font-size: 0.8rem;
        }

        .post-form-body {
          width: 80%;
          resize: none;
          height: 400px;
          margin-bottom: 40px;
          background: ${css.inputBackground};
          color: #ffffff;
          border: 2px solid ${css.inputBorder};
          padding: 15px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default RequestPostPage;
