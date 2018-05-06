import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPlayers } from "../actions";
import FieldList from "../components/FieldList";
class CurrentPlayer extends Component {
  componentDidMount() {
    console.log("GAME TITLE IN CurrentPlayer:", this.props.game.title);
    this.props.fetchPlayers(this.props.game.title);
  }
  render() {
    console.log("CurrentPlayer RECIEVED PLAYERS: ", this.props.players);
    if (!this.props.players || this.props.players.length === 0)
      return <div>Loading current player stats</div>;
    const player = this.props.players[this.props.game.currentPlayer];
    const fields = Object.keys(player);

    return (
      <div className="currentPlayer">
        <FieldList player={player} fields={fields} editable={true} />
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
export default connect(mapStateToProps, { fetchPlayers })(CurrentPlayer);
