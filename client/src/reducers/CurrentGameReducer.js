import { FETCH_CURRENT_GAME } from "../actions";
import _ from "lodash";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_CURRENT_GAME:
      return action.payload;
    default:
      return state;
  }
}
