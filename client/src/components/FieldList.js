import React from "react";
import Field from "./Field";

const FieldList = props => {
  const fields = Object.keys(props.player);
  const VP = props.player.victoryPoints();
  return (
    <div className="fieldList">
      <Field key="VP" title="Victory Points" editable={false} value={VP} />
      {fields.map(field => {
        if (field !== "name")
          return (
            <Field
              key={field}
              title={field}
              editable={true}
              value={props.player[field]}
            />
          );
      })}
    </div>
  );
};

export default FieldList;
