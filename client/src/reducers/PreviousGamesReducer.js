import { FETCH_PREVIOUS_GAMES } from "../actions";
// import _ from "lodash";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PREVIOUS_GAMES:
      return action.payload;
    default:
      return state;
  }
}
