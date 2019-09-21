import React, { Component } from "react";
import _ from "lodash";
import oneDie from "../svgs/dice-six-faces-one.svg";
import DicePair from "./enums/DicePair";
import DicePercentage from "./enums/DicePercentage";

class DiceTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      elementHeight: false
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.getHeight = this.getHeight.bind(this);
    this.calcCurrentDicePercentage = this.calcCurrentDicePercentage.bind(this);
  }

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

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    // if (!this.state.elementHeight) {
    //   this.setState({ elementHeight: window.scrollY });
    // }
  }

  handleScroll(event) {
    let scrollTop = window.scrollY;
    let height = Math.max(0, scrollTop / 3);
    if (
      height < this.state.elementHeight + 10 &&
      height > this.state.elementHeight
    ) {
      this.setState({
        height: height
      });
    } else if (
      height > this.state.elementHeight - 10 &&
      height < this.state.elementHeight
    ) {
      this.setState({
        height: height
      });
    }
  }

  getHeight(element) {
    if (element && !this.state.elementHeight) {
      this.setState({ elementHeight: element.clientHeight + 50 });
    }
  }

  calcCurrentDicePercentage(diceNumber) {
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
    let count = 0;
    _.forEach(pastTurns, turn => {
      count++;
      let diceRoll = String(turn.diceRoll);
      rolls[diceRoll]++;
    });
    let dicePercentage = ((rolls[diceNumber] / count) * 100).toString();
    return Math.round(dicePercentage) + "%";
  }

  render() {
    console.log("this.state.element hegith", this.state.elementHeight);
    console.log("this.state.highth", this.state.height);
    let rolls = this.getRolls();
    let regularStyle = {
      position: "relative",
      backgroundColor: "#cc5500",
      borderRadius: "10px"
    };
    let fixedStyle = {
      position: "fixed",
      top: "0px",
      backgroundColor: "#cc5500",
      borderRadius: "10px"
    };
    let style = null;
    if (
      this.state.elementHeight &&
      this.state.elementHeight < this.state.height
    ) {
      style = fixedStyle;
    } else {
      style = regularStyle;
    }

    return (
      <div ref={this.getHeight} style={style}>
        <div className="diceTracker">
          <h1 style={{ width: "80vw", textAlign: "center" }}>Dice count</h1>
          {Object.keys(rolls).map((roll, index) => {
            let diceNumber = index + 2;
            return (
              <div className="diceRoll">
                <div>{DicePercentage[diceNumber]}</div>
                <DicePair number={diceNumber} />
                <div className="diceRollNumber">{rolls[roll]}</div>
                <div>{this.calcCurrentDicePercentage(diceNumber)}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default DiceTracker;
