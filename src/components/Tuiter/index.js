import React from "react";
import { Provider } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import { combineReducers, createStore } from "redux";
import tuits from "../../reducers/tuits";
import tuitsReducer from "../../reducers/tuits-reducer";
import who from "../../reducers/who";
import ExploreScreen from "./ExploreScreen";
import HomeScreen from "./HomeScreen";

const reducer = combineReducers({ tuits: tuits, who, tuitsReducer: tuitsReducer });
const store = createStore(reducer);

const Tuiter = () => {
  return(
    <Provider store={store}>
      <h1>Tuiter</h1>
      <Link to="/">
        Home
      </Link> |
      <Link to="/hello">
        Hello
      </Link> |
      <Link to="/labs">
        Labs
      </Link>
      <div>
        <Routes>
          <Route 
            path="/"
            exact={true} 
            element={<HomeScreen />}
          />
          <Route 
            path="/tuiter/explore"
            exact={true} 
            element={<ExploreScreen />}
          />
        </Routes>
      </div>
    </Provider>
  )
};

export default Tuiter;
