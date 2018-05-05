import { GET_GAME, CREATE_GAME } from "../actions";

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
    default:
      return state;
  }
}
