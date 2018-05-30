import React from "react";
import FieldList from "../components/FieldList";

const Player = props => {
  const fields = ["settlements", "cities", "roadLength"];
  return (
    <div className="player" style={{ backgroundColor: props.player.color }}>
      <FieldList game={props.game} player={props.player} fields={fields} />
    </div>
  );
};

export default Player;
