import React from "react";
import { Link } from "react-router-dom";

const GamesListRow = ({ game }) => {
  let players = game.players.map(player => player.name);
  players = players.join(", ");
  console.log("PLAYERS: ", players);
  let month = game.date.slice(5, 7);
  let year = game.date.slice(1, 3);
  let day = game.date.slice(8, 10);
  let time = game.date.slice(11, 16);
  let date = `${month}/${day}/${year}  ${time}`;
  return (
    <tr key={game.title} className="previousGamesListRow">
      <td>
        <Link className="previousGamesListLink" to={`/games/${game.title}`}>
          {game.title}
        </Link>
      </td>
      <td>{date}</td>
      <td>{players}</td>
      <td>{game.complete.winner}</td>
    </tr>
  );
};

export default GamesListRow;
