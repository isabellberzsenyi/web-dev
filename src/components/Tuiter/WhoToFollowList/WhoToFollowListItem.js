import React from "react";
import './../explore.css';

const WhoToFollowListItem = ({
  who = {
    avatarIcon: "/tuiter/images/nasa.png",
    userName: 'NASA',
    handle: 'NASA',
  }
})  => {
  return (
    <>
      <div className="list-group-item">
        <div className="row">
          <div className="col-2 px-0">
            <img src={who.avatarIcon} className="rounded-circle m-0 p-0 follow-image" alt="avatarIcon" />
          </div>
          <div className="col-6 pe-0 overflow-overlay">
            <p className="fw-bold m-0">
              {who.userName}&nbsp;
              <i className="fa-solid fa-circle-check"></i>
            </p>
            <p className="fw-normal m-0">
            {who.handle}
            </p>
          </div>
          <div className="col-4 pe-0">
            <button className="btn btn-primary mt-1 rounded-pill btn-block">
              Follow
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default WhoToFollowListItem;