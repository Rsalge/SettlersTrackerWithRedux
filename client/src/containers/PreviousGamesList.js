import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGames } from "../actions";
class PreviousGamesList extends Component {
  componentDidMount() {
    this.props.fetchGames();
  }
  render() {
    console.log("PREVIOUS GAMES", this.props.games);
    return <div> Previous Games! </div>;
  }
}

function mapStateToProps(state) {
  return {
    games: state.games
  };
}

export default connect(mapStateToProps, { fetchGames })(PreviousGamesList);
