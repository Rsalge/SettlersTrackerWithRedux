import React from "react";
import { Link } from "react-router-dom";
const GamesList = ({ games }) => {
  return (
    <ul className="gameList">
      {games.map(game => (
        <li>
          <Link to={`/games/${game.title}`}>{game.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default GamesList;
