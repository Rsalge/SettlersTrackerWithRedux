import React from "react";

const ControlledField = props => {
  if (props) {
    return (
      <div className="field">
        <img src={props.src} alt={props.alt} />
        <button onClick={() => props.onClick(1)}>Up</button>
        <p>{props.value}</p>
        <button onClick={() => props.onClick(-1)}>Down</button>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default ControlledField;
