import React from "react";
import './GameScore.css'

const GameScore = _ => {
  return (
    <>
      <div id='score'>
        <h4 id='gameHeader'>Game Score:</h4>
      </div>
      <div id='results'>
        <h4 id='winsHeader'>Wins:</h4>
        <h4 id='lossesHeader'>Losses:</h4>
      </div>
    </>
  );
};

export default GameScore;
