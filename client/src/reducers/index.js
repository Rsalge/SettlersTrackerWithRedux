import { combineReducers } from "redux";
import PreviousGamesReducer from "./PreviousGamesReducer";
import CurrentPlayersReducer from "./CurrentPlayersReducer";
import GetGameReducer from "./GetGameReducer";

const rootReducer = combineReducers({
  players: CurrentPlayersReducer,
  games: PreviousGamesReducer,
  game: GetGameReducer
});

export default rootReducer;
