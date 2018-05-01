import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGames } from "../actions";
import GamesList from "../components/GamesList";
class PreviousGamesList extends Component {
  componentDidMount() {
    this.props.fetchGames();
  }
  //TODO: create a few games and then display them appropriately in a list
  render() {
    if (!this.props.games) {
      return <h3> Loading...</h3>;
    } else if (this.props.games["games"].length === 0) {
      return <h3> No previous games to view</h3>;
    }
    console.log("PREVIOUS GAMES", this.props.games);
    return <GamesList games={this.props.games["games"]} />;
  }
}

function mapStateToProps(state) {
  return {
    games: state.games.data
  };
}

export default connect(mapStateToProps, { fetchGames })(PreviousGamesList);
