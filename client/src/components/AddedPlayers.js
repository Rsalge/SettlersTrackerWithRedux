import React, { Component } from "react";
import { connect } from "react-redux";
import { movePlayer } from "../actions";
class AddedPlayers extends Component {
  handleMove(i, dir) {
    this.props.movePlayer(i, dir);
  }
  render() {
    if (!this.props.players) {
      return <div>Add at least 3 players to get started!</div>;
    }

    return (
      <div>
        {this.props.players.map((player, i) => (
          <div key={player.name}>
            <div>{player.name}</div>
            <button onClick={() => this.handleMove(i, 1)}>Down </button>
            <button onClick={() => this.handleMove(i, -1)}>Up </button>
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
