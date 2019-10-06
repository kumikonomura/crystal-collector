import React from "react";
import "./GameScore.css";

const GameScore = props => {
  return (
    <>
      <div
        className="ui stackable two column grid"
        style={{ textAlign: "center" }}
      >
        <div
          className="column"
          style={{ backgroundColor: "green", margin: "20px", padding: "5px" }}
        >
          <h4>Game Score: {props.gameScore}</h4>
        </div>
        <div
          className="column"
          style={{ backgroundColor: "aqua", margin: "20px", padding: "5px" }}
        >
          <h4>
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
