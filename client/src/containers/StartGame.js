import React, { Component } from "react";
import { connect } from "react-redux";
import { createGame } from "../actions";

class StartGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  startGame(e) {
    this.props.createGame(
      { players: this.props.players, title: this.state.title },
      id => this.props.history.push(`/games/${id}`)
    );
  }
  render() {
    return (
      <div className="startGame">
        <form
          onSubmit={e => {
            e.preventDefault();
            this.startGame();
          }}
        >
          <input
            type="text"
            placeholder="Name your game"
            value={this.state.title}
            onChange={e => this.setState({ title: e.target.value })}
          />
          <button type="submit"> Start Game! </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { players: state.players };
}

export default connect(mapStateToProps, { createGame })(StartGame);
