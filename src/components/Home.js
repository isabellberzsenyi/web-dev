import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return(
      <>
        <h1>ReactJS Web Dev Assignments</h1>
        <Link to="/labs">
          Labs
        </Link> |
        <Link to="/tuiter">
          Tuiter
        </Link>
      </>
    )
};

export default Home;
