import {
  ADD_PLAYER,
  GET_PLAYERS,
  CHANGE_FIELD,
  TURN_ERROR,
  MOVE_PLAYER
} from "../actions";
import _ from "lodash";
class Player {
  constructor(name) {
    this.name = name;
    this.settlements = 2;
    this.cities = 0;
    this.roadLength = 1;
    this.knights = 0;
    this.harbors = 0;
    this.turnNumber = 1;
    this.diceRoll = 7;
    this.newLand = 0;
  }
}

export default function(state = [], action) {
  switch (action.type) {
    case ADD_PLAYER:
      console.log("STATE: ", state, "ACTION.PAYLOAD: ", action.payload);
      let name = action.payload;
      name = name.trim();
      if (name.length === 0) {
        return state;
      } else if (_.find(state, { name })) {
        console.log("PLAYER EXISTS: ");
        return state;
      } else {
        const player = new Player(action.payload);
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
    case GET_PLAYERS:
      return action.payload.data.players;
    case CHANGE_FIELD:
      console.log("CHANGE_FIELD: ", action.payload);
      let newState = state.slice();
      newState[action.payload.player][action.payload.field] +=
        action.payload.value;
      console.log("newState", newState);
      return newState;
    default:
      return state;
  }
}
