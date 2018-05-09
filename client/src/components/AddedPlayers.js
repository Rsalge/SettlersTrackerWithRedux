import React, { Component } from "react";
import { connect } from "react-redux";
import { movePlayer } from "../actions";
class AddedPlayers extends Component {
  handleMove(i, dir) {
    this.props.movePlayer(i, dir);
  }
  handleRemove(i, dir) {
    //TODO: action creator here for remove a player
  }
  render() {
    if (!this.props.players) {
      return <div>Add at least 3 players to get started!</div>;
    }

    return (
      <div className="addedPlayers">
        {this.props.players.map((player, i) => (
          <div className="addedPlayer" key={player.name}>
            <div className="addedPlayerName">{player.name}</div>
            <div className="addedPlayerMove">
              <button onClick={() => this.handleMove(i, 1)}>Down </button>
              <button onClick={() => this.handleMove(i, -1)}>Up </button>
            </div>
            <div className="addedPlayerRemove">
              <button onClick={() => this.handleRemove(i)}> X </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    players: state.players
  };
}
export default connect(mapStateToProps, { movePlayer })(AddedPlayers);

// if(!players){
//   return  <div> Please Add players </div>
// }
