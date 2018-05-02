import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPlayer } from "../actions";
class CurrentPlayer extends Component {
  componentDidMount() {
    this.props.fetchPlayer(0);
  }
  render() {
    if (!this.props.player) return <div>Loading current player stats</div>;
    return <div>{this.props.player.name}</div>;
  }
}

function mapStateToProps(state) {
  return {
    player: state.players
  };
}
export default connect(mapStateToProps, { fetchPlayer })(CurrentPlayer);
