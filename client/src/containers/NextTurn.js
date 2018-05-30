import React, { Component } from "react";
import { connect } from "react-redux";
import { nextTurn } from "../actions";

class NextTurn extends Component {
  render() {
    let turns = this.props.players;
    let game = this.props.game;
    game.players = turns;
    return (
      <div className="submitTurn">
        <div
          className="submitTurnButton"
          onClick={() => this.props.nextTurn({ game })}
        />
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
export default connect(mapStateToProps, { nextTurn })(NextTurn);
