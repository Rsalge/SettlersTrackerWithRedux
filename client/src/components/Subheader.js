import React from "react";
import { Link } from "react-router-dom";

const Subheader = () => {
  return (
    <div className="subheader">
      <Link to="/"> Home </Link>
      <Link to="/newGame"> New Game </Link>
      <Link to="/previousGames"> Previous Games </Link>
    </div>
  );
};

export default Subheader;
