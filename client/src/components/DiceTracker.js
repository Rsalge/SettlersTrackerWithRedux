import React, { Component } from "react";
import _ from "lodash";

class DiceTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      elementHeight: null
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.getHeight = this.getHeight.bind(this);
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
  }

  handleScroll(event) {
    let scrollTop = window.scrollY;
    let height = Math.max(0, scrollTop / 3);
    console.log(window.scrollY);
    this.setState({
      height: height
    });
  }

  getHeight(element) {
    if (element && !this.state.elementHeight) {
      this.setState({ elementHeight: element.clientHeight + 50 });
    }
  }

  render() {
    console.log("this.state.element hegith", this.state.elementHeight);
    console.log("this.state.highth", this.state.height);
    let rolls = this.getRolls();
    let regularStyle = { position: "relative" };
    let fixedStyle = { position: "fixed", height: "50px", top: "0px" };
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
