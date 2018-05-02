const router = require("express").Router();
const Game = require("../../DB/GameModel.js");

router.get("/", (req, res) => {
  res.send("API Server");
});

router.get("/games", (reg, res) => {
  Game.getGames().then(games => res.send({ games }));
});

router.get("/game", (req, res) => {
  const id = req.query.id;
  Game.getGame(id)
    .then(game => {
      res.send({ game });
    })
    .catch(err => console.log("GAME FETCHING ERROR: ", err));
});

router.post("/createGame", (req, res) => {
  Game.createGame(req.body)
    .then(game => res.send(game))
    .catch(err => {
      console.log("GAME CREATION ERROR", err);
    });
});

module.exports = router;
