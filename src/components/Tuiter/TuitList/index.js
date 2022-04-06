import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findAllTuits } from "../../../actions/tuits-actions";
import TuitListItem from "./TuitListItem";
 
const selectAllTuits = (state) => state.tuitsReducer;

const TuitList = () => {
  const tuits = useSelector(selectAllTuits);
  const dispatch = useDispatch();
  useEffect(() => findAllTuits(dispatch), []);

  return(
    <ul className="list-group">
      {
        tuits.map((tuit, idx) =>
          <TuitListItem tuit={tuit} key={idx} />
        )
      }
    </ul>
  )
};
export default TuitList;
