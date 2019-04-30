import React from 'react'
import MemoryContext from './MemoryContext/MemoryContext'

class App extends React.Component {
  state = {
    players: [],
    player_name: '',
    timer: 0,
  }

  render() {

    const memoryValue = {
      players: this.state.players,
      player_name: this.state.player_name,
      timer: this.state.timer,
    }

    return (
      <MemoryContext.Provider
        value={memoryValue}
      > 
        <header>
          <h1>flip-flop</h1>
          <p>Memory Game</p>
        </header>
        <main className="App">
          
        </main>
      </MemoryContext.Provider>
    );
  }
  
}

export default App;
