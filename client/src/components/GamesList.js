import React from "react";

const GamesList = ({ games }) => {
  return <ul>{games.map(game => <li> {game.title} </li>)}</ul>;
};

export default GamesList;
