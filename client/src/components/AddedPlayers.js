import React from "react";

const AddedPlayers = ({ players }) => {
  if (!players) {
    return <div>Add at least 3 players to get started!</div>;
  }
  return (
    <div>
      {players.map(player => <div key={player.name}> {player.name} </div>)}
    </div>
  );
};

export default AddedPlayers;

// if(!players){
//   return  <div> Please Add players </div>
// }
