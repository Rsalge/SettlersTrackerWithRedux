import React, { Component } from "react";
import { connect } from "react-redux";
import CurrentPlayer from "../components/CurrentPlayer";
import Player from "../components/Player";

class CurrentGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: 0
    };
  }
  onComponentDidMount() {
    //TODO: create action to fetch game from DB
  }
  render() {
    console.log("PLAYERS PASSED INTO CurrentGame", this.props.players);
    return (
      <div>
        CURRENT GAME
        {/* <ul>
          {this.props.players.map((player, i) => {
            if (i === this.state.currentPlayer) {
              return <CurrentPlayer player={player} />;
            }
            return <Player player={player} />;
          })}
        </ul> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    game: state.game
  };
}
export default connect(mapStateToProps)(CurrentGame);
