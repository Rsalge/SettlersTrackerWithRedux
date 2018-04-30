import { combineReducers } from "redux";
import PreviousGamesReducer from "./PreviousGamesReducer";
import CurrentPlayersReducer from "./CurrentPlayersReducer";

const rootReducer = combineReducers({
  players: CurrentPlayersReducer,
  games: PreviousGamesReducer
});

export default rootReducer;
