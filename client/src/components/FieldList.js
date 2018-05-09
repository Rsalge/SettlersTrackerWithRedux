import React from "react";
import NextTurn from "../containers/NextTurn";
import Field from "../containers/Field";

const FieldList = props => {
  const VP = victoryPoints(props.player);
  return (
    <div className="fieldList">
      <Field leading={true} key="name" title={props.player.name} />
      <Field key="VP" title="VPs" value={VP} />
      <Field key="turnNumber" title="Turn" value={props.player.turnNumber} />
      {props.fields.map(field => {
        if (field !== "name" && field !== "turnNumber")
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

const victoryPoints = player => {
  return player.settlements + player.cities * 2 + player.newLand;
};

export default FieldList;
