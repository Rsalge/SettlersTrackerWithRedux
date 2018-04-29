export const ADD_PLAYER = "add_player";
export const FETCH_PREVIOUS_GAMES = "fetch_previous_games";

export function addPlayer(player) {
  return {
    type: ADD_PLAYER,
    payload: player
  };
}

export function fetchPreviousGames() {
  return {
    type: FETCH_PREVIOUS_GAMES,
    payload: "this will be a list of previous games"
  };
}
