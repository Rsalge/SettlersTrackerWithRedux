import React from "react";
import { Link } from "react-router-dom";

const Subheader = () => {
  return (
    <div className="subheader">
      <Link to="/previousGames"> Previous Games </Link>
      <Link to="/"> Current Game </Link>
    </div>
  );
};

export default Subheader;
