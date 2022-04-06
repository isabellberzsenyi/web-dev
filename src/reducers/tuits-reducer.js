import {CREATE_TUIT, DELETE_TUIT, FIND_ALL_TUITS, UPDATE_TUIT}
  from "../actions/tuits-actions";
const tuitsReducer = (state = [], action) => {
 switch (action.type) {
  case FIND_ALL_TUITS:
    return action.tuits;
  case DELETE_TUIT: 
    return state.filter(
      tuit => tuit._id !== action.tuit._id
    );
  case CREATE_TUIT:
    return [
      ...state,
      action.newTuit
    ];
  case UPDATE_TUIT:
    return state.map(t => t._id === action.tuit._id ? action.tuit : t);
  default:
    return state;
 }
}

export default tuitsReducer;