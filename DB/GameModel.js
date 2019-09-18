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
    default: Date.now()
  },
  players: {
    type: Array,
    required: true
  },
  complete: {
    staus: {
      type: Boolean,
      required: true,
      default: false
    },
    winner: {
      type: String,
      rewquired: true,
      default: ""
    }
  },
  pastTurns: {
    type: Array,
    required: true
  },
  currentPlayer: { type: Number, required: true, default: 0 },
  largestArmy: {
    name: { type: String, default: "" },
    count: { type: Number, default: 2 }
  },
  longestRoad: {
    name: { type: String, default: "" },
    count: { type: Number, default: 4 }
  },
  harborMaster: {
    name: { type: String, default: "" },
    count: { type: Number, default: 2 }
  }
});

const Game = mongoose.model("game", gameSchema);

Game.getGames = () => {
  return Game.find({}).exec();
};

Game.getGame = title => {
  return Game.findOne({ title }).exec();
};

Game.createGame = ({ title, players }) => {
  let game = new Game({ title, players });
  let error = false;
  return game.save();
};

Game.getPlayers = title => {
  return Game.findOne({ title }).exec();
};

Game.saveTurn = data => {
  console.log("INSIDE SAVE TURN: ", data);

  return Game.findOneAndUpdate({ title: data.title }, { $set: data }).exec();
};

module.exports = Game;
