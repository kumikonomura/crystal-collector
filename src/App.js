import React from 'react'
import Header from './Components/Header'
import Instructions from './Components/Instructions'
import GameScore from './Components/GameScore'
import Jewels from './Components/Jewels'

class App extends React.Component {
  render () {
    return (
      <>
      <Header />
      <Instructions />
      <GameScore />
      <Jewels />
      </>
    )
  }
}

export default App