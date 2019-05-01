import React from 'react'
import { Route, Link } from 'react-router-dom';
import MemoryContext from './MemoryContext/MemoryContext'

import LandingPage from './LandingPage/LandingPage'
import Leaderboard from './Leaderboard/Leaderboard'

class App extends React.Component {
  state = {
    players: [],
    player_name: '',
    timer: 0,
    showNameInput: false,
  }

  showNameModal = () => {
    this.setState({ showNameInput: true });
  };

  hideNameModal = () => {
    this.setState({ showNameInput: false });
  };

  updatePlayerName = (e, push) => {
    e.preventDefault()
    this.setState({
      player_name: e.target.name.value,
      showNameInput: false
    })
    push('/gameboard')
  }

  render() {

    const memoryValue = {
      players: this.state.players,
      player_name: this.state.player_name,
      timer: this.state.timer,
      showNameModal: this.showNameModal,
      hideNameModal: this.hideNameModal,
      showNameInput: this.state.showNameInput,
      updatePlayerName: this.updatePlayerName,
    }

    return (
      <MemoryContext.Provider
        value={memoryValue}
      > 
        <header>
          <h1>
            <Link to='/' title='Home'>flip-flop</Link>
          </h1>
          <p>Memory Game</p>
        </header>

        <Route
          exact path='/'
          component={LandingPage}
        />

        <Route
          path='/leaderboard'
          component={Leaderboard}
        />

        <footer role="contentinfo">
          footer
        </footer>

      </MemoryContext.Provider>
    );
  }
  
}

export default App;
