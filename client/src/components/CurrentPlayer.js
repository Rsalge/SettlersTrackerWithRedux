import React from "react";
import _ from "lodash";
const CurrentPlayer = props => {
  let headers = Object.keys(props.player);
  return (
    <table>
      <tbody>
        <tr>{headers.map(header => <th key={header}>{header}</th>)}</tr>
      </tbody>
    </table>
  );
};

export default CurrentPlayer;
