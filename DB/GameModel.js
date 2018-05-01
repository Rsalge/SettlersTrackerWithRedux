const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },

  date: {
    type: Date,
    required: true,
    default: Date.now
  },

  players: [
    {
      name: {
        type: String,
        required: true
      },
      turns: Array
    }
  ],

  complete: {
    type: Boolean,
    required: true,
    default: false
  },

  winner: String
});

const Game = mongoose.model("game", gameSchema);

Game.getGames = () => {
  return Game.find({}).exec();
};

Game.getGame = id => {
  return Game.findOne({ id }).exec();
};

Game.createGame = ({ title, players }) => {
  console.log("TITLE: ", title, "\nPLAYERS: ", players);
  let game = new Game({ title, players });
  game.save(err => {
    if (err) return handleError(err); //
  });
};

module.exports = Game;
