import React, { Component } from "react";
import { connect } from "react-redux";
import { changeField, updateScoreBoard } from "../actions";
import house from "../svgs/house.svg";
import city from "../svgs/city.svg";
import road from "../svgs/road.svg";
import knight from "../svgs/knight.svg";
import dice from "../svgs/dice.svg";
import plusOne from "../svgs/plusOne.svg";
import harbors from "../svgs/harbors.svg";
import ControlledField from "../components/Field_Controlled";

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
    this.props.updateScoreBoard();
  }
  render() {
    if (this.props.editable) {
      return (
        <ControlledField
          src={svgs[this.props.title]}
          alt={this.props.title}
          value={this.props.value}
          onClick={this.handleClick.bind(this)}
        />
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

export default connect(mapStateToProps, { changeField, updateScoreBoard })(
  Field
);
