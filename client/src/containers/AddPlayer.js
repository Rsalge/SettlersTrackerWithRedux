import React, { Component } from "react";
import { connect } from "react-redux";
import { addPlayer } from "../actions";

class AddPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: ""
    };
  }
  render() {
    return (
      <div className="addPlayer">
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.addPlayer(this.state.player);
            this.setState({ player: "" });
          }}
        >
          <input
            type="text"
            value={this.state.player}
            onChange={e => this.setState({ player: e.target.value })}
          />
          <button type="submit"> Add Player </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addPlayer })(AddPlayer);
