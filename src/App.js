import React from "react";
import Header from "./Components/Header";
import Instructions from "./Components/Instructions";
import GameScore from "./Components/GameScore";
import Jewels from "./Components/Jewels";
import UserScore from "./Components/UserScore";

class App extends React.Component {
  state = {
    diamond: Math.floor(Math.random() * 20 + 1),
    emerald: Math.floor(Math.random() * 20 + 1),
    ruby: Math.floor(Math.random() * 20 + 1),
    sapphire: Math.floor(Math.random() * 20 + 1),
    gameScore: Math.floor(Math.random() * 100 + 1),
    userScore: 0,
    wins: 0,
    losses: 0
  };

  // click jewel that is equal to a random number and that number will
  // appear on TOTAL SCORE

  handleClickDiamond = _ => {
    console.log("click diamond working");
    let diamond = this.state.diamond;
    let userScore = this.state.userScore;
    this.setState({
      diamond: diamond,
      userScore: userScore + diamond
    });
    console.log(diamond);
  };

  handleClickEmerald = _ => {
    console.log("click emerald working");
    let emerald = this.state.emerald;
    let userScore = this.state.userScore;
    this.setState({
      emerald: emerald,
      userScore: userScore + emerald
    });
    console.log(emerald);
  };

  handleClickRuby = _ => {
    console.log("click ruby working");
    let ruby = this.state.ruby;
    let userScore = this.state.userScore;
    this.setState({
      ruby: ruby,
      userScore: userScore + ruby
    });
    console.log(ruby);
  };

  handleClickSapphire = _ => {
    console.log("click sapphire working");
    let sapphire = this.state.sapphire;
    let userScore = this.state.userScore;
    this.setState({
      sapphire: sapphire,
      userScore: userScore + sapphire
    });
    console.log(sapphire);
  };

  render() {
    return (
      <>
        <Header />
        <Instructions />
        <GameScore
          gameScore={this.state.gameScore}
          wins={this.state.wins}
          losses={this.state.losses}
        />
        <Jewels
          handleClickDiamond={this.handleClickDiamond}
          handleClickEmerald={this.handleClickEmerald}
          handleClickRuby={this.handleClickRuby}
          handleClickSapphire={this.handleClickSapphire}
          diamond={this.state.diamond}
          emerald={this.state.emerald}
          ruby={this.state.ruby}
          sapphire={this.state.sapphire}
        />
        <UserScore userScore={this.state.userScore} />
      </>
    );
  }
}

export default App;
