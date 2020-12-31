import React from "react";

import * as css from "../utils/cssVariables";
import { PostType } from "../utils/types/postType";
import Tag from "./Tag";

interface Props {
  post: PostType;
}

const CommunityPost: React.FC<Props> = ({ post }) => {
  return (
    <React.Fragment>
      <div className="community-post-container">
        <div className="community-post-aside">
          <p>Votes: {post.votes}</p>
          <p>Answers: {post.comments.length}</p>
        </div>
        <div className="community-post-main">
          <p>
            {post.title}{" "}
            <span className="community-post-user">
              asked by: {post.user.username}
            </span>
          </p>
          <p>{post.body}</p>
          <div className="post-communities-container">
            {post.communities.map((community) => (
              <Tag name={community.name} key={community.name} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .community-post-container {
          width: 90%;
          margin-top: 30px;
          background: ${css.floatingPostBackground};
          border-radius: 10px;
          height: 140px;
          display: flex;
        }

        .community-post-aside {
          width: 10%;
        }

        .community-post-main {
          width: 90%;
        }
      `}</style>
    </React.Fragment>
  );
};

export default CommunityPost;
