import React from "react";
import _ from "lodash";

/*this component will need to be a container and have refernce to players in redux state,
will need to add action creator for UPDATE_PLAYER that will be called once values are cahanged
and the next player is called to CurrentPlayer
*/
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
