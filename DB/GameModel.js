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
  let game = new Game({ title, players });
  game.save(err => {
    if (err) return handleError(err);
  });
};

// User.getUserPlaylists = spotifyUserId =>
//   User.find(
//     { spotifyId: spotifyUserId },
//     {
//       "playlists.playlistName": 1,
//       "playlists.spotifyPlaylistID": 1,
//       "playlists.spotifyPlaylistURI": 1
//     }
//   ).exec();

// User.getAPlaylist = (spotifyUserId, playlistName) =>
//   User.find(
//     {
//       spotifyId: spotifyUserId
//     },
//     {
//       playlists: { $elemMatch: { playlistName: playlistName } }
//     }
//   );

// User.populateAPlaylist = userArray =>
//   User.find(
//     { spotifyId: { $in: userArray } },
//     { spotifyId: 1, currentMySong: 1, mySongUsername: 1 }
//   );

// User.createPlaylist = (spotifyUserId, newPlaylist) =>
//   User.update(
//     { spotifyId: spotifyUserId },
//     {
//       $push: {
//         playlists: newPlaylist
//       }
//     }
//   );

// User.getCurrentSong = spotifyId =>
//   User.find({ spotifyId })
//     .select("currentMySong")
//     .exec()
//     .then(res => res)
//     .catch(err => err);

// User.getFollowing = spotifyId => {
//   return User.find({ spotifyId })
//     .select("following")
//     .exec()
//     .then(res => res)
//     .catch(err => err);
// };

// User.removeFollow = (currentUserSpotifyId, removeSpotifyId) => {
//   return User.update(
//     {
//       spotifyId: currentUserSpotifyId
//     },
//     {
//       $pull: { following: { spotifyId: removeSpotifyId } }
//     }
//   ).exec();
// };

// User.deletePlaylist = (currentUserSpotifyId, playlistName) => {
//   return User.update(
//     {
//       spotifyId: currentUserSpotifyId
//     },
//     {
//       $pull: { playlists: { playlistName: playlistName } }
//     }
//   ).exec();
// };

// User.populateFollowing = following => {
//   const followingIds = following.map(follow => {
//     // eslint-disable-line
//     return follow.spotifyId;
//   });
//   return User.find({ spotifyId: { $in: followingIds } })
//     .select("spotifyId mySongUsername currentMySong")
//     .exec();
// };

// User.addToFollowing = (currentUserId, idToAdd) =>
//   User.findOneAndUpdate(
//     { spotifyId: currentUserId },
//     { $push: { following: { spotifyId: idToAdd } } }
//   )
//     .exec()
//     .then(res => res)
//     .catch(err => err);

// User.changeCurrentSong = (spotifyId, mySong) => {
//   return User.update(
//     { spotifyId: spotifyId },
//     {
//       $set: {
//         currentMySong: mySong
//       }
//     }
//   )
//     .exec()
//     .then(res => {
//       return res;
//     })
//     .catch(err => {
//       console.log("error is ", err);
//       return err;
//     });
// };

// User.getUser = spotifyId => {
//   return User.findOne({ spotifyId: spotifyId })
//     .exec()
//     .then(user => {
//       return user;
//     })
//     .catch(err => err);
// };

// User.getAllUsers = () => {
//   return User.find({}, "mySongUsername spotifyId")
//     .exec()
//     .then(user => user)
//     .catch(err => err);
// };

// User.updatePlaylist = (spotifyId, originalName, newPlaylist) => {
//   return User.update(
//     { spotifyId: spotifyId, "playlists.playlistName": originalName },
//     {
//       $set: {
//         "playlists.$": newPlaylist
//       }
//     }
//   )
//     .exec()
//     .then(res => {
//       return res;
//     })
//     .catch(err => {
//       console.log("error is ", err);
//       return err;
//     });
// };

// User.search = query =>
//   User.find({}, "mySongUsername spotifyId")
//     .exec()
//     .then(users => users)
//     .catch(err => err);

module.exports = Game;
