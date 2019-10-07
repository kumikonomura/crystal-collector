import React from "react";
import "./GameScore.css";

const GameScore = props => {
  return (
    <>
      <div className="ui stackable two column grid" id="grid_style">
        <div className="column" id="gameScore">
          <h4 id='gameHeader'>Game Score: {props.gameScore}</h4>
        </div>
        <div id="winsAndLosses" className="column">
          <h4 id='winsAndLossesHeader'>
            Wins: {props.wins} | Losses: {props.losses}
          </h4>
        </div>
      </div>
      {/* <div id="score">
        <h4 id="gameHeader">Game Score: {props.gameScore}</h4>
      </div>
      <div id="results">
        <h4 id="winsHeader">
          Wins: {props.wins} | Losses: {props.losses}
        </h4> */}
      {/* <h4 id="lossesHeader">Losses: {props.losses}</h4> */}
      {/* </div> */}
    </>
  );
};

export default GameScore;
