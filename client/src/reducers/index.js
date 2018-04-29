import { combineReducers } from "redux";
import PreviousGamesReducer from "./PreviousGamesReducer";
import CurrentGameReducer from "./CurrentGameReducer";

const rootReducer = combineReducers({
  previousGames: PreviousGamesReducer,
  currentGame: CurrentGameReducer
});

export default rootReducer;
