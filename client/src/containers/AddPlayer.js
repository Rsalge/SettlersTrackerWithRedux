import React, { Component } from "react";
import { connect } from "react-redux";
import { addPlayer } from "../actions";
import { TwitterPicker } from "react-color";
import _ from "lodash";

class AddPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: "",
      color: "#ff0f0f",
      displayColorPicker: false,
      error: null
    };
  }
  render() {
    let colors = [
      "#EEF3F0",
      "#FF0F0F",
      "#4c88ff",
      "#188b52",
      "#F87A04",
      "#8B572A",
      "#EAEE12",
      "#ba68c8"
    ];
    return (
      <div className="addPlayer">
        <h3 style={{ color: "black", textShadow: "2px 2px 8px #ff0000" }}>
          {this.state.error && this.state.error}
        </h3>
        <form
          className="addPlayerForm"
          onSubmit={e => {
            e.preventDefault();
            let error = null;
            let color = this.state.color;
            let player = this.state.player;
            if (_.find(this.props.players, { name: player })) {
              error = "Player name already exists";
              player = "";
            } else if (_.find(this.props.players, { color })) {
              error = "Player color already chosen";
            } else {
              this.props.addPlayer(this.state.player, this.state.color);
              player = "";
            }
            this.setState({ player, error });
          }}
          style={{ position: "relative" }}
        >
          <input
            type="text"
            value={this.state.player}
            onChange={e => this.setState({ player: e.target.value })}
            placeholder="Player name"
          />
          <div
            className="selectColor"
            style={{ backgroundColor: this.state.color }}
            onClick={() =>
              this.setState({
                displayColorPicker: !this.state.displayColorPicker
              })
            }
          />
          {this.state.displayColorPicker && (
            <div style={{ position: "absolute", zIndex: "2", top: "30px" }}>
              <div
                style={{
                  position: "fixed",
                  top: "0px",
                  right: "0px",
                  bottom: "0px",
                  left: "0px"
                }}
                onClick={() => this.setState({ displayColorPicker: false })}
              />
              <TwitterPicker
                onChange={color =>
                  this.setState({ color: color.hex, displayColorPicker: false })
                }
                triangle={"hide"}
                colors={colors}
              />
            </div>
          )}
          <button type="submit"> Add Player </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    players: state.players
  };
}

export default connect(mapStateToProps, { addPlayer })(AddPlayer);
