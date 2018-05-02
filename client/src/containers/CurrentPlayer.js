import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPlayer } from "../actions";
class CurrentPlayer extends Component {
  render() {
    if (!this.props.players) return <div>Loading current player stats</div>;
    const player = this.props.players[this.props.game.currentPlayer];
    return <div>{player.name}</div>;
  }
}

function mapStateToProps(state) {
  return {
    players: state.players,
    game: state.game
  };
}
export default connect(mapStateToProps, { fetchPlayer })(CurrentPlayer);
