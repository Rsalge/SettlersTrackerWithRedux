import React, { Component } from "react";
import { connect } from "react-redux";
import { changeField } from "../actions";
class Field extends Component {
  handleClick(value) {
    console.log("CLICKED: ", value);
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
          <h3>{this.props.title}</h3>
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
    } else {
      return (
        <div className="field">
          <h3>{this.props.title}</h3>
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
