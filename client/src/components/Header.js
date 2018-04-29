import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Link to="/games"> Previous Games </Link>
      <Link to="/"> Current Game </Link>
    </div>
  );
};

export default Header;
