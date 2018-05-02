import React, { Component } from "react";

class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }
  render() {
    return (
      <div className="field">
        <h3>{this.props.title}</h3>
        <input value={this.props.value} />
      </div>
    );
  }
}

export default Field;
