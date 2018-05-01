import React from "react";

const GamesList = ({ games }) => {
  return games.map(game => <li> {game.title} </li>);
};

export default GamesList;
