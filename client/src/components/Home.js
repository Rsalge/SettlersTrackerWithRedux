import React from "react";

const Home = () => {
  return (
    <div className="home">
      <h3>Welcome to Settlers Tracker!</h3>
      <p>
        The main purpose of this app is to track what dice have been rolled
        during a game of catan, at least that is what most interested me. In
        addition to tracking each dice roll per turn you can also keep track of
        a players Victory Points (VP) by tracking the number of settlements,
        cities, roads, and ports a player has. Largest Army, Longest Road, and
        Harbor Master are additional objectives that award 2 VPs each and the
        holder of each objective is tracked as well. Previously completed games
        can be viewed under the Previous Games tab, allowing you to see the
        previous game stats. Just a fun way to keep up with how games went, who
        won, how many f***ing fours were rolled, etc.
      </p>
    </div>
  );
};

export default Home;
