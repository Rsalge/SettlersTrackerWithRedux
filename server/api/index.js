const router = require("express").Router();
const Game = require("../../DB/GameModel.js");

router.get("/", (req, res) => {
  res.send("API Server");
});

router.get("/games", (reg, res) => {
  Game.getGames().then(games => res.send({ games }));
});

router.get("/game", (req, res) => {
  const id = req.params.id;
  Game.getGame(id).then(game => res.send({ game }));
});

router.post("/createGame", (req, res) => {
  console.log("INSIDE OF CREATE GAME ROUTE", req.body);
  // Game.createGame(req.body).then(game => res.send(game));
  res.send("YAY");
});

module.exports = router;
