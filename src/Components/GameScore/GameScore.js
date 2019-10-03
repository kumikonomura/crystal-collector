import React from "react";
import "./GameScore.css";

const GameScore = props => {
  return (
    <>
      <div id="score">
        <h4 id="gameHeader">Game Score: {props.gameScore}</h4>
      </div>
      <div id="results">
        <h4 id="winsHeader">Wins: {props.wins}</h4>
        <h4 id="lossesHeader">Losses: {props.losses}</h4>
      </div>
    </>
  );
};

export default GameScore;
