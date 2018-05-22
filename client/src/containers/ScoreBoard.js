import React, { Component } from "react";
import { connect } from "react-redux";
import { updateScoreBoard } from "../actions";
class ScoreBoard extends Component {
  componentDidMount() {
    this.props.updateScoreBoard();
  }
  render() {
    return (
      <div>
        <h1>SCOREBOARD</h1>
        <div>
          {`This player has the longest road ${
            this.props.game.longestRoad.name
          }`}
        </div>
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
export default connect(mapStateToProps, { updateScoreBoard })(ScoreBoard);
