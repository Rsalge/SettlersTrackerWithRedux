import React, { Component } from "react";
import { connect } from "react-redux";
import { addPlayer } from "../actions";
import AddedPlayers from "../components/AddedPlayers";
class NewGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: "",
      gameId: ""
    };
  }

  startGame() {
    this.props.history.push(`/games/${this.state.gameId}`);
  }

  render() {
    console.log("CHECKING REDUX CONNECTION: ", this.props.players);
    return (
      <div className="NewGame">
        New Game!
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.addPlayer(this.state.player);
          }}
        >
          <input
            type="text"
            value={this.state.player}
            onChange={e => this.setState({ player: e.target.value })}
          />
          <button type="submit"> Add Player </button>
        </form>
        <AddedPlayers players={this.props.players} />
        <form
          onSubmit={e => {
            e.preventDefault();
            this.startGame();
          }}
        >
          <input
            type="text"
            placeholder="Name your game"
            value={this.state.gameId}
            onChange={e => this.setState({ gameId: e.target.value })}
          />
          <button type="submit"> Start Game! </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    players: state.players
  };
}

export default connect(mapStateToProps, { addPlayer })(NewGame);
