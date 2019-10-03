import React from "react";
import "./UserScore.css";

const UserScore = props => {
  return (
    <div id="totalScore">
      <h4 id="userScoreHeader">User Score: {props.userScore}</h4>
    </div>
  );
};

export default UserScore;
