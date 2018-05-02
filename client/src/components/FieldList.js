import React from "react";
import Field from "./Field";

const FieldList = props => {
  const fields = Object.keys(props.player);
  return (
    <div className="fieldList">
      {fields.map(field => {
        if (field !== "name")
          return (
            <Field key={field} title={field} value={props.player[field]} />
          );
      })}
    </div>
  );
};

export default FieldList;
