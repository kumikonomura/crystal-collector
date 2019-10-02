import React from 'react'
import Header from './Components/Header'
import Instructions from './Components/Instructions'
import GameScore from './Components/GameScore'

class App extends React.Component {
  render () {
    return (
      <>
      <Header />
      <Instructions />
      <GameScore />
      </>
    )
  }
}

export default App