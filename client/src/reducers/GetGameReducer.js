import {
  GET_GAME,
  CREATE_GAME,
  NEXT_TURN,
  TURN_ERROR,
  UPDATE_SCOREBOARD
} from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case CREATE_GAME:
      if (action.payload instanceof Error) {
        return { ...state, error: "Duplicate game name" };
      }
      return action.payload;
    case GET_GAME:
      return action.payload.data.game;
    case NEXT_TURN:
      console.log("NEXT_TURN payload: ", action.payload.message);
      return action.payload;
    case UPDATE_SCOREBOARD:
      let newState = Object.assign({}, state);
      let players = newState.players;
      findLargest(newState, "roadLength", "longestRoad");
      findLargest(newState, "knights", "largestArmy");
      findLargest(newState, "harbors", "harborMaster");
      console.log("UPDATING SCOREBOARD: ", newState);
      return newState;
    default:
      return state;
  }
}

const findLargest = (newState, playerField, stateField) => {
  let players = newState.players;
  players.forEach(player => {
    console.log("PLayer FIELD INFO", player[playerField]);

    if (player[playerField] > newState[stateField].count) {
      newState[stateField].count = player[playerField];
      newState[stateField].name = player.name;
    } else if (player.name === newState[stateField].name) {
      if (player[playerField] < newState[stateField].count) {
        newState[stateField].count = player[playerField];
        findLargest(newState);
      }
    }
  });
  return players;
};
