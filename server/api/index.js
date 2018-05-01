const router = require("express").Router();
const Game = require("../../DB/GameModel.js");

router.get("/", (req, res) => {
  res.send("API Server");
});

router.get("/games", (reg, res) => {
  Game.getGames().then(games => res.send({ games }));
});

router.get("/game/:id", (req, res) => {
  const id = req.params.id;
  Game.getGame(id).then(game => res.send({ game }));
});

module.exports = router;
