import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTuit } from '../../../actions/tuits-actions';

const WhatsHappening = () => {
  const [whatsHappening, setWhatsHappening] = useState('');
  const dispatch = useDispatch();

  // const tuitClickHandler = () => {
  //   dispatch({
  //     type: 'create-tuit',
  //     tuit: whatsHappening
  //   })
  // };

  return (
    <>
      <table>
        <tr>
        <td style={{verticalAlign: 'top'}}>
            <img 
              src={'/tuiter/images/Izzy.png'}
              className="rounded-circle"
              style={{width: '48px', margin: '16px'}}
              alt="prof"
            />
        </td>
        <td style={{ width: "100%"}}>
          <textarea
            value={whatsHappening}
            onChange={(event) => setWhatsHappening(event.target.value)}
            className="form-control"
            style={{
              width: "100%",
              color: "white",
              padding: "0px",
              paddingTop: "15px",
              backgroundColor: "black"
            }}
            placeholder="What's happening?"
          />
          <hr />
          <span>
            <a href="/tuiter"><i className="far fa-image me-3"></i></a>
            <a href="/tuiter"><i className="far fa-analytics me-3"></i></a>
            <a href="/tuiter"><i className="far fa-smile me-3"></i></a>
            <a href="/tuiter"><i className="far fa-calendar me-3"></i></a>
          </span>
          <button onClick={() => createTuit(dispatch, {tweet: whatsHappening})} className="btn btn-primary fa-pull-right rounded-pill">
            Tuit
          </button>
        </td>
        </tr>
      </table>
    </>
  );
};

export default WhatsHappening;