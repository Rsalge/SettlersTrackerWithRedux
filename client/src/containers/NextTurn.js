import React, { Component } from "react";
import { connect } from "react-redux";
import { nextTurn } from "../actions";

class NextTurn extends Component {
  handleClick() {
    //action creator here
  }
  render() {
    let turns = this.props.players;
    let game = this.props.game;
    game.players = turns;
    return (
      <div className="submitTurn">
        <button onClick={() => this.props.nextTurn({ game })}>Submit</button>
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
