import React from "react";
import { Link } from "react-router-dom";
import Classes from "./Classes";
import ConditionalOutput from "./ConditionalOutput";
import ReduxExamples from "./redux-examples";
import Styles from "./Styles";
import TodoList from "./Todo/TodoList";

const Labs = () => {
    return(
      <>
        <h1>Labs</h1>
        <Link to="/">
          Home
        </Link> |
        <Link to="/hello">
          Hello
        </Link> |
        <Link to="/tuiter">
          Tuiter
        </Link>
        <ConditionalOutput />
        <Classes />
        <Styles />
        <TodoList />
        <ReduxExamples />
      </>
    )
};

export default Labs;
