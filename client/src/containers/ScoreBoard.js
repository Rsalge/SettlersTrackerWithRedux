import React, { Component } from "react";
import { connect } from "react-redux";
import { updateScoreBoard } from "../actions";
class ScoreBoard extends Component {
  componentDidMount() {
    this.props.updateScoreBoard();
  }
  renderTitle(title) {
    return (
      <div className={`${title}Title`}>
        <div>
          {this.props.game[title].name === ""
            ? "No Player has reached the minimum"
            : this.props.game[title].name}
        </div>
        <div>
          {this.props.game[title].name === ""
            ? ""
            : this.props.game[title].count}
        </div>
      </div>
    );
  }
  renderDiceCount() {
    let { pastTurns } = this.props.game;
    let rolls = {};
    pastTurns.forEach(({ diceRoll }) => {
      rolls[diceRoll] === undefined ? (rolls[diceRoll] = 1) : rolls[diceRoll]++;
    });
    //TODO: return html elements for each dice roll
    console.log("Rolls: ", rolls);
  }
  render() {
    return (
      <div className="scoreBoard">
        <h1>{this.props.game.title}</h1>
        <div className="scoreBoardFields">
          <div className="longestRoad">{this.renderTitle("longestRoad")}</div>
          <div className="largestArmy">{this.renderTitle("largestArmy")}</div>
          <div className="harborMaster">{this.renderTitle("harborMaster")}</div>
          <div className="diceCount">{this.renderDiceCount()}</div>
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
