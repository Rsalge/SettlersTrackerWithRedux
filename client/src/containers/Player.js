import React from "react";
import FieldList from "../components/FieldList";

const Player = props => {
  const fields = ["settlements", "cities", "roadLength"];
  return (
    <div className="player">
      <FieldList player={props.player} fields={fields} />
    </div>
  );
};

export default Player;
