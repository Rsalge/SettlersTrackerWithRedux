import axios from "axios";
export const ADD_PLAYER = "add_player";
export const FETCH_PREVIOUS_GAMES = "fetch_previous_games";
export const CREATE_GAME = "create_game";
export const GET_GAME = "get_game";
export const GET_PLAYERS = "get_players";
export const CHANGE_FIELD = "change_field";
export const NEXT_TURN = "next_turn";
export const TURN_ERROR = "turn_error";
export const MOVE_PLAYER = "move_player";
export const REMOVE_PLAYER = "remove_player";
export const UPDATE_SCOREBOARD = "update_scoreboard";
export const DECLARE_WINNER = "declare_winner";

export function addPlayer(name, color) {
  let player = { name, color };
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
  const request = axios.get(`/api/game`, { params: { title } });

  return {
    type: GET_GAME,
    payload: request
  };
}

export function fetchPlayers(title) {
  let request = axios.get("/api/players", { params: { title } });
  return {
    type: GET_PLAYERS,
    payload: request
  };
}

export function changeField(fieldOptions) {
  return {
    type: CHANGE_FIELD,
    payload: fieldOptions
  };
}

export function nextTurn(data) {
  let { game } = data;
  let playerCount = game.players.length;
  let curPlayerIndex = game.currentPlayer;
  let currentPlayerTurnInfo = game.players[curPlayerIndex];

  game.pastTurns.push(currentPlayerTurnInfo);
  currentPlayerTurnInfo.turnNumber++;
  
  let nextPlayer = curPlayerIndex + 1;
  if (nextPlayer >= playerCount) {
    nextPlayer = 0;
  }
  game.currentPlayer = nextPlayer;
  let request = axios
    .put("/api/saveTurn", game)
    .then(game => {
      return game.data;
    })
    .catch(err => {
      return err;
    });
  return {
    type: NEXT_TURN,
    payload: request
  };
}

export function movePlayer(i, dir) {
  return {
    type: MOVE_PLAYER,
    payload: { i, dir }
  };
}

export function removePlayer(i) {
  return {
    type: REMOVE_PLAYER,
    payload: i
  };
}

export function updateScoreBoard() {
  return {
    type: UPDATE_SCOREBOARD,
    payload: true
  };
}

export function declareWinner(data) {
  let { game } = data;
  game.complete.status = true;
  game.complete.winner = game.players[game.currentPlayer].name;
  console.log('declaring winner', game.players[game.currentPlayer].name)
  
  let request = axios
    .put("/api/declareWinner", game)
    .then(game => {
      return game.data;
    })
    .catch(err => {
      return err;
    });
  return {
    type: DECLARE_WINNER,
    payload: request
  };
}