import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCurrentGame } from "../actions";
class CurrentGame extends Component {
  onComponentDidMount() {
    this.props.fetchCurrentGame();
  }
  render() {
    return <div>Current Game! </div>;
  }
}

function mapStateToProps(state) {
  return {
    currentGame: state.currentGame
  };
}
export default connect(mapStateToProps, { fetchCurrentGame })(CurrentGame);
