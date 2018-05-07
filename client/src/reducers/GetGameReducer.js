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
      console.log("NEXT_TURN payload: ", action.payload.message);
      //TODO: Handle Async issue with saving to DB
      return action.payload;
    case TURN_ERROR:
      //TODO: Handle error events here
      return state;
    default:
      return state;
  }
}
