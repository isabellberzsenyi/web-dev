import React from "react";
import { useSelector } from "react-redux";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
  const who = useSelector((state) => state);
  
  return (
    <ul class="list-group">
      <li class="list-group-item">
        Who to follow
      </li>
      {who.map((w) => {
        return(
          <WhoToFollowListItem who={w} />);
      })}
    </ul>
  );
};

export default WhoToFollowList;