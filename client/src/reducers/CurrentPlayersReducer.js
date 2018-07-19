import {
  ADD_PLAYER,
  GET_PLAYERS,
  CHANGE_FIELD,
  TURN_ERROR,
  MOVE_PLAYER,
  REMOVE_PLAYER
} from "../actions";
import _ from "lodash";
class Player {
  constructor(name, color) {
    this.name = name;
    this.settlements = 2;
    this.cities = 0;
    this.roadLength = 1;
    this.knights = 0;
    this.harbors = 0;
    this.turnNumber = 1;
    this.diceRoll = 7;
    this.newLand = 0;
    this.color = color;
  }
}

export default function(state = [], action) {
  switch (action.type) {
    case ADD_PLAYER:
      console.log("STATE: ", state, "ACTION.PAYLOAD: ", action.payload);
      let name = action.payload.name;
      let color = action.payload.color;
      name = name.trim();
      if (name.length === 0) {
        return state;
      } else {
        const player = new Player(name, action.payload.color);
        return [...state, player];
      }
    case MOVE_PLAYER:
      //will need to do a decent amount of logic here for updating laingestRoad and the such
      let newPlayers = state.slice();
      let { i, dir } = action.payload;
      let newIndex = i + dir;
      if (newIndex >= 0 && newIndex < newPlayers.length) {
        [newPlayers[i], newPlayers[i + dir]] = [
          newPlayers[i + dir],
          newPlayers[i]
        ];
      }
      return newPlayers;
    case REMOVE_PLAYER:
      let removePlayer = state.slice();
      console.log(
        "PLAYERS BEFORE REMOVE",
        removePlayer,
        "\n index: ",
        action.payload
      );
      removePlayer.splice(action.payload, 1);
      console.log("PLAYERS AFTER REMOVE", removePlayer);
      return removePlayer;
    case GET_PLAYERS:
      return action.payload.data.players;
    case CHANGE_FIELD:
      let newState = state.slice();
      newState[action.payload.player][action.payload.field] +=
        action.payload.value;
      return newState;
    default:
      return state;
  }
}
