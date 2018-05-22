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
      findLongestRoad(newState);
      console.log("UPDATING SCOREBOARD: ", newState);
      return newState;
    default:
      return state;
  }
}

const findLongestRoad = newState => {
  let players = newState.players;
  players.forEach(player => {
    console.log(
      "PLayer INFO",
      player.roadLength,
      "\nLongest Road: ",
      newState.longestRoad.count
    );

    if (player.roadLength > newState.longestRoad.count) {
      newState.longestRoad.count = player.roadLength;
      newState.longestRoad.name = player.name;
    } else if (player.name === newState.longestRoad.name) {
      if (player.roadLength < newState.longestRoad.count) {
        newState.longestRoad.count = player.roadLength;
        findLongestRoad(newState);
      }
    }
  });
  return players;
};
