import { GET_GAME, CREATE_GAME, NEXT_TURN, TURN_ERROR } from "../actions";

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
      console.log("NEXT_TURN payload: ", action.payload);

      // let newState = { ...state };
      // let playerCount = newState.players.length;
      // let nextPlayer = newState.currentPlayer + 1;
      // if (nextPlayer >= playerCount) {
      //   nextPlayer = 0;
      // }
      // newState.currentPlayer = nextPlayer;
      return action.payload;
    case TURN_ERROR:
      //TODO: Handle error events here
      return state;
    default:
      return state;
  }
}
