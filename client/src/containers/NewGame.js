import React, { Component } from "react";
import { connect } from "react-redux";
import { addPlayer } from "../actions";
class NewGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: ""
    };
  }

  render() {
    console.log("CHECKING REDUX CONNECTION: ", this.props.players);
    return (
      <div>
        New Game!
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.addPlayer(this.state.player);
          }}
        >
          <input
            type="text"
            value={this.state.player}
            onChange={e => this.setState({ player: e.target.value })}
          />
          <button type="submit"> Add Player </button>
        </form>
        {/* <button onClick={this.props.fetchCurrentGame}>
          Fetch Current Game
        </button> */}
        {this.props.players &&
          this.props.players.map(player => (
            <div key={player.name}> {player.name} </div>
          ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    players: state.players
  };
}

export default connect(mapStateToProps, { addPlayer })(NewGame);