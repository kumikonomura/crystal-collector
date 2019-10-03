import React from "react";
import Diamond from "../images/diamond.png";
import Emerald from "../images/emerald.png";
import Ruby from "../images/ruby.png";
import Sapphire from "../images/sapphire.jpg";
import "./Jewels.css";

const Jewels = props => {
  return (
    <div className="ui small images">
      <img
        id="picture"
        onClick={props.handleClickDiamond}
        src={Diamond}
      />
      <img id="picture" src={Emerald} />
      <img id="picture" src={Ruby} />
      <img id="picture" src={Sapphire} />
    </div>
  );
};

export default Jewels;
