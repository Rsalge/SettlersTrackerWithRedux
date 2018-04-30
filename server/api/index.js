const router = require("express").Router();
const Game = require("../../DB/GameModel/game");

router.get("/", (req, res) => {
  res.send("API Server");
});

router.get("/game", (reg, res) => {
  Game.getGames().then(games => res.send({ games }));
});

router.get("/hello", (req, res) => {
  res.send({
    name: "World"
  });
});

module.exports = router;
