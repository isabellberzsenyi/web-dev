import React from "react";
import posts from "./posts.json";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = ({title}) => {
  return (
    <ul className="list-group">
      {
        title &&
        <li className="list-group-item">
          <h5 className="fw-bolder">{title}</h5>
        </li>
      }
      {posts
        .map((p, idx) => {
          return(
            <PostSummaryItem post={p} key={idx} />
          )
        })
      }
    </ul>
  )
};

export default PostSummaryList;