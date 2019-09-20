import React from "react";
import FieldEnum from "../components/enums/FieldEnum";
import FieldList from "../components/FieldList";

const Player = props => {
  const fields = [
    FieldEnum.SETTLEMENT_COUNT,
    FieldEnum.CITY_COUNT,
    FieldEnum.ROAD_COUNT,
    FieldEnum.KNIGHT_COUNT
  ];
  return (
    <div className="player" style={{ backgroundColor: props.player.color }}>
      <h1 className="leadingField">{props.player.name}</h1>
      <FieldList game={props.game} player={props.player} fields={fields} />
    </div>
  );
};

export default Player;
