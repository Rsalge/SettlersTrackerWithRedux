const router = require("express").Router();
const Game = require("../../DB/GameModel.js");

router.get("/", (req, res) => {
  res.send("API Server");
});

router.get("/games", (reg, res) => {
  Game.getGames().then(games => res.send({ games }));
});

router.get("/game", (req, res) => {
  const title = req.query.title;
  Game.getGame(title)
    .then(game => {
      res.send({ game });
    })
    .catch(err => console.log("GAME FETCHING ERROR: ", err));
});

router.post("/createGame", (req, res) => {
  Game.createGame(req.body)
    .then(game => res.send(game))
    .catch(err => {
      console.log("GAME CREATION ERROR", err.code);
      if (err.code === 11000) {
        res
          .status(409)
          .send({ error: "Game title exists, please try a new title" });
      }
      res.sendStatus;
    });
});

router.get("/players", (req, res) => {
  const title = req.query.title;
  console.log("GAME TITLE in /players endpoint: ", title);
  Game.getPlayers(title)
    .then(game => {
      console.log("PLAYER INFORMATION: ", game.players);
      res.send({ players: game.players });
    })
    .catch(err => {
      console.log("GAME FETCHING ERROR: ", err);
      res.status(404).send({ error: " get(/player) error" });
    });
});

module.exports = router;
