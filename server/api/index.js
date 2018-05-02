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
  console.log("INSIDE /game ROUTE, GAME ID: ", id);
  Game.getGame(id)
    .then(game => {
      console.log("\n\n#################\nGAME INFO: ", game, "\n\n\n");
      res.send({ game });
    })
    .catch(err => console.log("GAME FETCHING ERROR: ", err));
});

router.post("/createGame", (req, res) => {
  console.log("INSIDE OF CREATE GAME ROUTE", req.body);
  Game.createGame(req.body)
    .then(game => res.send(game))
    .catch(err => {
      console.log(
        "\n\n\n#############################\nGAME CREATION ERROR",
        err
      );
    });
});

module.exports = router;
