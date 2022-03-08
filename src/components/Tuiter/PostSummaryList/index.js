import React from "react";
import posts from "./posts.json";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
  return (
    <ul class="list-group">
      {posts
        .map((p) => {
          return(
            <PostSummaryItem post={p} />
          )
        })
      }
    </ul>
  )
};

export default PostSummaryList;