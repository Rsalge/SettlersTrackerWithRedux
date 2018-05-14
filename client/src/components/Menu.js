import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <Link to="/"> Home </Link>
      <Link to="/newGame"> New Game </Link>
      <Link to="/previousGames"> Previous Games </Link>
      <Link to="/rules"> Rules </Link>
    </div>
  );
};

export default Menu;
