import React from "react";
import "./Header.css";
import MediaQuery from "react-responsive";

const Header = _ => {
  return (
    <div>
      <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>
        <h2 id="header">Crystal Collector!</h2>
      </MediaQuery>
    </div>
  );
};

export default Header;
