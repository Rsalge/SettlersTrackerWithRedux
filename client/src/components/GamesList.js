import React from "react";
import { Link } from "react-router-dom";
import GamesListRow from "./GamesListRow";
import GamesListHeaders from "./GamesListHeaders";
const GamesList = ({ games }) => {
  return (
    <table className="gameList">
      <GamesListHeaders />
      <tbody>
        {games.map(game => {
          return <GamesListRow game={game} />;
        })}
      </tbody>
    </table>
  );
};

export default GamesList;
