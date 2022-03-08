import React from "react";

const PostSummaryItem = ({
  post = {
    topic: "Web Development",
    userName: "ReactJS",
    time: "2h",
    title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    image: "/tuiter/images/reactjs.png"
  }
}) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-xl-10 col-md-10 d-flex flex-column">
          <p className="m-0">{post.topic}</p>
          <div className="d-flex flex-row align-items-center">
            <p className="fw-bold m-0">{post.userName}&nbsp;</p>
            <i className="fa-solid fa-circle-check"></i>
            <p className="m-0 p-0">&nbsp;- {post.time}</p>
          </div>
          <p className="fw-bold lh-sm">
            {post.title}
          </p>
        </div>
        <div className="col-xl-2 col-md-2 m-0 d-flex flex-column align-items-end">
          <img src={post.image} width="100px" height="100px" className="rounded" alt="post pic" />
        </div>
      </div>
    </li>
  )
};

export default PostSummaryItem;