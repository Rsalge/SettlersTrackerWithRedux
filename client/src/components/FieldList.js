import React from "react";
import Field from "./Field";
import NextTurn from "../containers/NextTurn";

const FieldList = props => {
  const VP = victoryPoints(props.player);
  return (
    <div className="fieldList">
      <Field leading={true} key="name" title={props.player.name} />
      <Field key="VP" title="Victory Points" value={VP} />
      <Field
        key="turnNumber"
        title="Turn Number"
        value={props.player.turnNumber}
      />
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
      {props.editable && (
        <NextTurn />
        // <div className="submitTurn">
        //   <button>Submit</button>
        // </div>
      )}
    </div>
  );
};

const victoryPoints = player => {
  return player.settlements + player.cities * 2 + player.newLand;
};

export default FieldList;
