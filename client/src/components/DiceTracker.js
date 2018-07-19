import React, { Component } from "react";
import _ from "lodash";

class DiceTracker extends Component {
  getRolls() {
    let { pastTurns } = this.props.game;
    let rolls = {
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0
    };
    _.forEach(pastTurns, turn => {
      let diceRoll = String(turn.diceRoll);
      rolls[diceRoll]++;
    });
    return rolls;
  }

  render() {
    let rolls = this.getRolls();
    console.log("DICETRACKER rolls: ", rolls);
    for (let roll in rolls) {
      console.log("Roll key: ", roll, "Roll value: ", rolls[roll]);
    }

    return (
      <div>
        <h1 style={{ width: "80vw", textAlign: "center" }}>Dice count</h1>
        <div className="diceTracker">
          {Object.keys(rolls).map(roll => (
            <div className="diceRoll">
              <div>{roll}</div>
              <div>{rolls[roll]}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DiceTracker;
