import { GET_GAME, CREATE_GAME, NEXT_TURN } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case CREATE_GAME:
      if (action.payload instanceof Error) {
        console.log("ERROR INSIDE GetGameReducer", action.payload);
        return { ...state, error: "Duplicate game name" };
      }
      return action.payload;
    case GET_GAME:
      return action.payload.data.game;
    case NEXT_TURN:
      let newState = { ...state };
      let playerCount = newState.players.length;
      let nextPlayer = newState.currentPlayer + 1;
      if (nextPlayer >= playerCount) {
        nextPlayer = 0;
      }
      newState.currentPlayer = nextPlayer;
      return newState;
    default:
      return state;
  }
}
