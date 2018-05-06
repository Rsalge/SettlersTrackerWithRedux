import React, { Component } from "react";
import { connect } from "react-redux";
import { addPlayer } from "../actions";
import AddedPlayers from "../components/AddedPlayers";
import StartGame from "./StartGame";
import AddPlayer from "./AddPlayer";
class NewGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: "",
      title: ""
    };
  }

  render() {
    console.log("GAME INFO INSIDE OF NEW GAME", this.props.game);
    return (
      <div className="NewGame">
        New Game!
        <AddPlayer />
        {/* <form
          onSubmit={e => {
            e.preventDefault();
            this.props.addPlayer(this.state.player);
            this.setState({ player: "" });
          }}
        >
          <input
            type="text"
            value={this.state.player}
            onChange={e => this.setState({ player: e.target.value })}
          />
          <button type="submit"> Add Player </button>
        </form> */}
        <AddedPlayers players={this.props.players} />
        <StartGame history={this.props.history} />
        {this.props.game.error}
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

export default connect(mapStateToProps, { addPlayer })(NewGame);
