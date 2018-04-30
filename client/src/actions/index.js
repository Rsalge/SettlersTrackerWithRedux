import axios from "axios";
export const ADD_PLAYER = "add_player";
export const FETCH_PREVIOUS_GAMES = "fetch_previous_games";

export function addPlayer(player) {
  return {
    type: ADD_PLAYER,
    payload: player
  };
}

export function fetchGames() {
  const request = axios.get("/api/games");
  return {
    type: FETCH_PREVIOUS_GAMES,
    payload: request
  };
}
