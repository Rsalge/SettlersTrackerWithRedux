import React from "react";
import NextTurn from "../containers/NextTurn";
import Field from "../containers/Field";

const FieldList = props => {
  const VP = victoryPoints(props.player, props.game);
  return (
    <div className="fieldList">
      <Field key="VP" title="VPs" value={VP} />
      <Field key="turnNumber" title="Turn" value={props.player.turnNumber} />
      {props.fields.map(field => {
        if (field !== "name" && field !== "turnNumber" && field !== "color")
          return (
            <Field
              key={field}
              title={field}
              editable={props.editable}
              value={props.player[field]}
            />
          );
      })}
      {props.editable && <NextTurn />}
    </div>
  );
};

const victoryPoints = (player, game) => {
  let vp = 0;
  if (game.longestRoad.name === player.name) {
    vp += 2;
  }
  if (game.largestArmy.name === player.name) {
    vp += 2;
  }
  if (game.harborMaster.name === player.name) {
    vp += 2;
  }
  vp += player.settlements + player.cities * 2 + player.newLand;
  return vp;
};

export default FieldList;
