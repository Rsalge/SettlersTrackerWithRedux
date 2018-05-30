import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPlayers } from "../actions";
import Player from "./Player";
import CurrentPlayer from "./CurrentPlayer";

class PlayerList extends Component {
  componentDidMount() {
    this.props.fetchPlayers(this.props.game.title);
  }
  render() {
    console.log("PLAYER LIST: ", this.props.players);

    return (
      <div>
        {this.props.players.map((player, i) => {
          if (i !== this.props.game.currentPlayer) {
            return (
              <Player
                game={this.props.game}
                key={player.name}
                player={player}
                index={i}
              />
            );
          } else {
            return <CurrentPlayer key={player.name} />;
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
export default connect(mapStateToProps, { fetchPlayers })(PlayerList);
