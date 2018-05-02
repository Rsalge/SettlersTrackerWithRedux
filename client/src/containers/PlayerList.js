import React, { Component } from "react";
import { connect } from "react-redux";
import Player from "../components/Player";

class PlayerList extends Component {
  render() {
    console.log("PLAYER LIST", this.props.players);
    return (
      <div>
        {this.props.players.map((player, i) => {
          if (i !== this.props.game.currentPlayer) {
            return <Player key={player.name} player={player} />;
          }
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    players: state.players,
    game: state.game
  };
}
export default connect(mapStateToProps)(PlayerList);
