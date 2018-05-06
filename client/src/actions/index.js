import axios from "axios";
export const ADD_PLAYER = "add_player";
export const FETCH_PREVIOUS_GAMES = "fetch_previous_games";
export const CREATE_GAME = "create_game";
export const GET_GAME = "get_game";
export const GET_PLAYER = "get_player";
export const CHANGE_FIELD = "change_field";

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
    .post("/api/createGame", gameInfo)
    .then(gameInfo => {
      callback(gameInfo.data.title); //passing in the id of the game for React Router navigation
      return gameInfo;
    })
    .catch(error => error);

  return {
    type: CREATE_GAME,
    payload: request
  };
}

export function fetchGame(title) {
  console.log("ID PASSES INTO fetchGame ACTION: ", title);
  const request = axios.get(`/api/game`, { params: { title } });

  return {
    type: GET_GAME,
    payload: request
  };
}

export function fetchPlayer(player) {
  return {
    type: GET_PLAYER,
    payload: player
  };
}

export function changeField(fieldOptions) {
  console.log("CHANGE FIELD ACTION");
  return {
    type: CHANGE_FIELD,
    payload: fieldOptions
  };
}
