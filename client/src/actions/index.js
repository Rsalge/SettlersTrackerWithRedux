export const FETCH_CURRENT_GAME = "fetch_current_game";
export const FETCH_PREVIOUS_GAMES = "fetch_previous_games";

export function fetchCurrentGame() {
  return {
    type: FETCH_CURRENT_GAME,
    payload: "this will be current game data"
  };
}

export function fetchPreviousGames() {
  return {
    type: FETCH_PREVIOUS_GAMES,
    payload: "this will be a list of previous games"
  };
}
