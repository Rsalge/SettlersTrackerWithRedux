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
