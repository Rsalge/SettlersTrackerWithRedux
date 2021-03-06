import React, { Component } from "react";
import { connect } from "react-redux";
import FieldList from "../components/FieldList";
import { declareWinner } from "../actions";
import Timer from "react-timer-wrapper";
import Timecode from "react-timecode";

class CurrentPlayer extends Component {
  render() {
    if (!this.props.players || this.props.players.length === 0)
      return <div>Loading current player stats</div>;
    const player = this.props.players[this.props.game.currentPlayer];
    const fields = Object.keys(player);
    const game = this.props.game;
    

    return (
      <div className="currentPlayer" style={{ backgroundColor: player.color }}>
        <div className="fieldList">
          <h1 className="leadingField">{player.name}</h1>
          <div className="leadingField">
            <Timer active duration={null}>
              <Timecode />
            </Timer>
          </div>
        </div>

        <FieldList
          game={this.props.game}
          player={player}
          fields={fields}
          editable={true}
        />
        <div className="winner-btn">
          <button onClick={() => this.props.declareWinner({ game })}>Declare Winner</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    players: state.players,
    game: state.game
  };
}
export default connect(mapStateToProps, { declareWinner })(CurrentPlayer);
