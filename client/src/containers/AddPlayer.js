import React, { Component } from "react";
import { connect } from "react-redux";
import { addPlayer } from "../actions";
import { TwitterPicker } from "react-color";
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
          className="addPlayerForm"
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
            placeholder="Player name"
          />
          {/* <TwitterPicker width="10px" /> */}
          <div className="colorSquare" />
          <button type="submit"> Add Player </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addPlayer })(AddPlayer);
