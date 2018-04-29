import { ADD_PLAYER, addPlayer } from "../actions";
import { WSAETIMEDOUT } from "constants";

class Player {
  constructor(name) {
    this.name = name;
    this.settlements = 2;
    this.cities = 0;
    this.roadLength = 1;
    this.knights = 0;
    this.harbors = 0;
    this.turnNumber = 1;
    this.diceRoll = 7;
    this.longestRoad = 0;
    this.largestArmy = 0;
    this.harborMaster = 0;
    this.newLand = 0;
  }
  victoryPoints() {
    return (
      this.cities * 2 +
      this.settlements +
      this.longestRoad +
      this.harborMaster +
      this.biggestArmy +
      this.newLand
    );
  }
  addCity() {
    this.cities++;
    this.settlements--;
  }
}

export default function(
  state = {
    players: [new Player("Ross"), new Player("AD")],
    largestArmy: 3,
    longestRoad: 3,
    harborMaster: 3
  },
  action
) {
  console.log("ACTION", action.type);
  switch (action.type) {
    case ADD_PLAYER:
      const player = new Player(action.payload);
      return [...state.players, player];
    // case UPDATE_PLAYER:
    //   //will need to do a decent amount of logic here for updating laingestRoad and the such
    //   return state.players;
    default:
      return state.players;
  }
}
