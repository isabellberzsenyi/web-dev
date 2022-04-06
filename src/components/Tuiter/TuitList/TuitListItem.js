import React from "react";
import './tuits.css';
// import TweetStats from "./TweetStats";
import {useDispatch} from "react-redux";
import TuitStats from "./TuitStats";
import { deleteTuit } from "../../../actions/tuits-actions";

const TweetListItem = ({tuit}) => {
  const dispatch = useDispatch();
  // const deleteTuitClickHandler = () => {
  //   dispatch({type: 'delete-tuit', tuit})
  // }
  return(
    <li className="list-group-item">
      <table>
        <tr>
          <td className="align-text-top">
              <img className="rounded-circle wd-avatar-image"
                src={tuit.logoImage}
                alt="avatar"
              />
          </td>
          <td className="ps-3" style={{width: '100%'}}>
            <i onClick={() => deleteTuit(dispatch, tuit)} className="fa fa-remove fa-pull-right"></i>
            <span className="fw-bold">{tuit.userName}</span>
            {tuit.verified && <i className="ms-1 fas fa-badge-check"></i>}
            <span className="ms-1 text-secondary">@{tuit.handle}</span>
            <div>
              {tuit.tweet}
            </div>
            {
              tuit.attachments && tuit.attachments.image &&
                <img src={tuit.attachments.image}
                  className="mt-2 wd-border-radius-20px"
                  style={{width: "100%"}}
                  alt="attachment"
                />
              }
              {
                tuit.attachments && tuit.attachments.video &&
                  <iframe 
                    width="100%" 
                    height="350px"
                    className="mt-2 wd-border-radius-20px"
                    style={{width: "100%"}}
                    src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  >
                  </iframe>
              }
              {/*{JSON.stringify(tuit)}*/}
              <TuitStats tuit={tuit}/>
          </td>
        </tr>
      </table>
    </li>
  );
};

export default TweetListItem;