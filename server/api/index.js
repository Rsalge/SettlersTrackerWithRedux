const router = require("express").Router();
const Game = require("../../DB/GameModel.js");

router.get("/", (req, res) => {
  res.send("API Server");
});

router.get("/games", (reg, res) => {
  Game.getGames().then(games => res.send({ games }));
});

router.get("/hello", (req, res) => {
  res.send({
    name: "World"
  });
});

module.exports = router;
