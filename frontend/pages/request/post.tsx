import React, { ChangeEvent, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useQuery } from "react-query";

import * as css from "../../utils/cssVariables";
import host from "../../utils/host";

type PostType = {
  uuid: string;
};

type CommunityType = {
  uuid: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  posts: PostType[];
};

type DataType = {
  communities: CommunityType[];
  hasMore: boolean;
};

const RequestPostPage: React.FC = () => {
  const [body, setBody] = useState<string>("**Hello World!**");
  const [text, setText] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [uuids, setUuids] = useState<string[]>([]);

  const fetchCommunities = async (filter: string = "") => {
    const res = await fetch(
      `${host}/communities?page=1&limit=6&filter=${filter}`
    );
    return await res.json();
  };

  const { isLoading, isError, error, data } = useQuery<DataType, Error>(
    ["communities", text],
    () => fetchCommunities(text)
  );

  useEffect(() => {
    const tagExpand = document.getElementById("expand");
    if (text !== "") {
      tagExpand.style.width = "80%";
      tagExpand.style.height = "190px";
    } else {
      tagExpand.style.width = "0";
      tagExpand.style.height = "0";
    }
  }, [text]);

  const tagClick = (e) => {
    const errMsg = document.getElementById("err-msg");

    if (tags.length < 5) {
      if (!tags.includes(e.target.textContent)) {
        setTags([...tags, e.target.textContent]);
        setUuids([
          ...uuids,
          e.target.parentElement.parentElement.parentElement.getAttribute(
            "data-key"
          ),
        ]);
        setText("");
        errMsg.innerText = "";
      } else {
        setText("");
        errMsg.innerText = "Community already chosen!";
      }
    } else {
      setText("");
      errMsg.innerText = "Maximum amount of communities reached";
    }
  };

  const removeTag = (e) => {
    const index = tags.indexOf(
      e.target.parentNode.parentNode.firstElementChild.textContent
    );
    setTags(tags.filter((tag) => tags.indexOf(tag) !== index));
    setUuids(uuids.filter((uuid) => uuids.indexOf(uuid) !== index));
  };

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
        <div className="tags">
          <div className="active-tags-container">
            {tags.map((tag) => (
              <div key={uuids[tags.indexOf(tag)]} className="tag-container">
                <div className="tag-background active-tag-background">
                  <p className="tag-name">{tag}</p>
                  <div className="tag-close-background" onClick={removeTag}>
                    <i className="fas fa-times tag-close" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <input
            type="text"
            className="post-form-input"
            placeholder="Communities: (maximum 5) "
            value={text}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setText(e.target.value)
            }
          />
          <p className="error-msg" id="err-msg" />
          <div className="tags-expand" id="expand">
            {isLoading ? (
              <div>Loading...</div>
            ) : isError ? (
              <div>Error: {error.message}</div>
            ) : (
              <React.Fragment>
                {data.communities.map((community) => (
                  <div
                    className="tags-expand-element"
                    key={community.uuid}
                    data-key={community.uuid}
                  >
                    <div className="tag-container">
                      <div className="tag-background" onClick={tagClick}>
                        <p className="tag-name">{community.name}</p>
                      </div>
                    </div>
                    <p>{community.description}</p>
                  </div>
                ))}
              </React.Fragment>
            )}
          </div>
        </div>
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
          margin: 0 auto 140px;
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

        .tags {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: -40px;
          margin-bottom: 40px;
        }

        .tags-expand {
          width: 0;
          height: 0;
          background: #2b2b2b;
          border: 1px solid #bebebe;
          border-radius: 4px;
          display: grid;
          grid-template-rows: 1fr 1fr;
          grid-template-columns: 1fr 1fr 1fr;
        }

        .tag-container {
          display: flex;
          justify-content: flex-start;
        }

        .tags-expand-element {
          height: 87%;
          overflow: hidden;
          font-size: 0.8rem;
        }

        .tags-expand-element > p {
          margin: 0 8px;
        }

        .tag-background {
          background: ${css.tagBackground};
          border-radius: 4px;
          cursor: pointer;
          margin: 5px;
        }

        .tag-background:hover {
          background: #3e3e3e;
        }

        .tag-name {
          padding: 2px 7px;
        }

        .tag-name:hover {
          color: #c6c6c6;
        }

        .error-msg {
          color: #ff3f3f;
        }

        .active-tag-background {
          display: flex;
          align-items: center;
        }

        .tag-close-background {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 80%;
          margin-right: 7px;
          width: 15px;
          border-radius: 4px;
        }

        .tag-close-background:hover {
          background: #999999;
        }

        .tag-close {
          color: white;
          display: block;
        }
      `}</style>
    </React.Fragment>
  );
};

export default RequestPostPage;
