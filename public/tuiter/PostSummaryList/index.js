import exploreItems from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
  return (`
    <ul class="list-group">
      ${exploreItems
        .map((p) => PostSummaryItem(p))
        .join("")
      }
    </ul>
  `)
};

export default PostSummaryList;