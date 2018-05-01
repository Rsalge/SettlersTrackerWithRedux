import axios from "axios";
export const ADD_PLAYER = "add_player";
export const FETCH_PREVIOUS_GAMES = "fetch_previous_games";
export const CREATE_GAME = "create_game";

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

export function createGame(gameInfo, callback) {
  const request = axios
    .post("/api/createGame", gameInfo, callback)
    .then(() => callback());

  return {
    type: CREATE_GAME,
    payload: request
  };
}
