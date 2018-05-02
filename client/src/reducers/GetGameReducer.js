import { GET_GAME, CREATE_GAME } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case CREATE_GAME:
      return action.payload;
    case GET_GAME:
      return action.payload;
    default:
      return state;
  }
}
