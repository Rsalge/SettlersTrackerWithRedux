import React from "react";
import { Link } from "react-router-dom";
const Rules = () => {
  return (
    <div>
      <h1>The rules</h1>
      <Link to="/rules/standard">StandardRules</Link>
    </div>
  );
};

export default Rules;
