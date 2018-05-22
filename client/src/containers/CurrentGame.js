import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGame } from "../actions";
import PlayerList from "./PlayerList";
import ScoreBoard from "./ScoreBoard";

class CurrentGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: 0
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchGame(id);
  }
  render() {
    console.log("GAME INFO PASSED INTO CurrentGame", this.props.game);
    if (!this.props.game || !this.props.game.players)
      return <div> Loading... </div>;
    return (
      <div className="currentGame">
        CURRENT GAME
        <ScoreBoard />
        <PlayerList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    game: state.game
  };
}
export default connect(mapStateToProps, { fetchGame })(CurrentGame);
