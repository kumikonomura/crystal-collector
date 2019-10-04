import React from "react";
import Diamond from "../images/diamond.png";
import Emerald from "../images/emerald.png";
import Ruby from "../images/ruby.png";
import Sapphire from "../images/sapphire.jpg";
import "./Jewels.css";

const Jewels = props => {
  return (
    <div className="ui small images">
      <img id="diamond" onClick={props.handleClickDiamond} src={Diamond} />
      <img id="emerald" onClick={props.handleClickEmerald} src={Emerald} />
      <img id="ruby" onClick={props.handleClickRuby} src={Ruby} />
      <img id="sapphire" onClick={props.handleClickSapphire} src={Sapphire} />
    </div>
  );
};

export default Jewels;
