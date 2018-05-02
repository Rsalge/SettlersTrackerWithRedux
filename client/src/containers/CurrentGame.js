import React, { Component } from "react";
import { connect } from "react-redux";
import CurrentPlayer from "../components/CurrentPlayer";
import Player from "../components/Player";
import { fetchGame } from "../actions";

class CurrentGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: 0
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    console.log("GAME ID", id);
    this.props.fetchGame(id);
    //TODO: create action to fetch game from DB
  }
  render() {
    console.log("GAME INFO PASSED INTO CurrentGame", this.props.game);
    if (!this.props.game.players) return <div> Loading... </div>;
    return (
      <div>
        CURRENT GAME
        <ul>
          {this.props.game.players.map((player, i) => {
            if (i === this.state.currentPlayer) {
              return <CurrentPlayer player={player} />;
            }
            return <Player player={player} />;
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    game: state.game
  };
}
export default connect(mapStateToProps, { fetchGame })(CurrentGame);
