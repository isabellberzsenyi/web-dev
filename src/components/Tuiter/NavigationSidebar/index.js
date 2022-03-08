import React from "react";

const NavigationSidebar = (
  {
    active = 'explore'
  }
) => {
  return(
    <>
      <div className="list-group">
        <a className="list-group-item" href="/">
          <i className="fab fa-twitter"></i>
        </a>
        <a className={`list-group-item ${active === 'home' ? 'active' : ''}`} href="../home.html">
          <i className="fa-solid fa-house-chimney"></i>
          Home
        </a>
        <a className={`list-group-item ${active === 'explore' ? 'active' : ''}`} href="../explore.html">
          <i className="fa-solid fa-hashtag"></i>
          Explore
        </a>
        <a className={`list-group-item ${active === 'notifications' ? 'active' : ''}`} href="/">
          <i className="fa-solid fa-bell"></i>
          Notifications
        </a>
        <a className={`list-group-item ${active === 'messages' ? 'active' : ''}`} href="/">
          <i className="fa-solid fa-envelope"></i>
          Messages
        </a>
        <a className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`} href="/">
          <i className="fa-solid fa-bookmark"></i>
          Bookmarks
        </a>
        <a className={`list-group-item ${active === 'lists' ? 'active' : ''}`} href="/">
          <i className="fa-solid fa-list"></i>
          Lists
        </a>
        <a className={`list-group-item ${active === 'profile' ? 'active' : ''}`} href="/">
          <i className="fa-solid fa-user"></i>
          Profile
        </a>
        <a className={`list-group-item ${active === 'more' ? 'active' : ''}`} href="/">
          <i className="fa-solid fa-ellipsis"></i>
          More
        </a>
      </div>
      <div className="d-grid mt-2">
        <a href="tweet.html"
          className="btn btn-primary btn-block rounded-pill"
        >
          Tweet
        </a>
      </div>
    </>
  );
}
export default NavigationSidebar;
