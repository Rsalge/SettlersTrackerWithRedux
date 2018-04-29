import { combineReducers } from "redux";
import PreviousGamesReducer from "./PreviousGamesReducer";
import CurrentPlayersReducer from "./CurrentPlayersReducer";

const rootReducer = combineReducers({
  players: CurrentPlayersReducer
});

export default rootReducer;
