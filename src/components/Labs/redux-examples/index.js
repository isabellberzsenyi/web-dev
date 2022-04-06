import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import HelloReduxExampleComponent from "./hello-redux-example-component";
import hello from "./reducers/hello";
import todos from "./reducers/todos";
import Todos from "./Todos";

const ReduxExamples = () => {
  const reducers = combineReducers({hello, todos})
  const store = createStore(reducers);

  return(
    <Provider store={store}>
      <div>
        <h2>Redux Examples</h2>
        <HelloReduxExampleComponent />
        <Todos />
      </div>
    </Provider>
  );
};
export default ReduxExamples;
