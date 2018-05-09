import React, { Component } from "react";
import { connect } from "react-redux";
import { changeField } from "../actions";
import house from "../svgs/house.svg";
import city from "../svgs/city.svg";
import road from "../svgs/road.svg";
import knight from "../svgs/knight.svg";
import dice from "../svgs/dice.svg";
import plusOne from "../svgs/plusOne.svg";
import harbors from "../svgs/harbors.svg";

const svgs = {
  settlements: house,
  cities: city,
  roadLength: road,
  knights: knight,
  diceRoll: dice,
  newLand: plusOne,
  harbors
};

class Field extends Component {
  handleClick(value) {
    this.props.changeField({
      player: this.props.game.currentPlayer,
      field: this.props.title,
      value
    });
  }
  render() {
    if (this.props.editable) {
      return (
        <div className="field">
          <img src={svgs[this.props.title]} alt={this.props.title} />
          <button onClick={this.handleClick.bind(this, 1)}>Up</button>
          <p>{this.props.value}</p>
          <button onClick={this.handleClick.bind(this, -1)}>Down</button>
        </div>
      );
    } else if (this.props.leading) {
      return (
        <div className="leadingField">
          <h1>{this.props.title}</h1>
        </div>
      );
    } else if (this.props.title === "VPs" || this.props.title === "Turn") {
      return (
        <div className="field">
          <h3>{this.props.title}</h3>
          <p>{this.props.value}</p>
        </div>
      );
    } else {
      return (
        <div className="field">
          <img src={svgs[this.props.title]} alt={this.props.title} />
          <p>{this.props.value}</p>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    game: state.game
  };
}

export default connect(mapStateToProps, { changeField })(Field);
