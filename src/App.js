import React from 'react'
import './App.css'
import { Route, Link } from 'react-router-dom';
import MemoryContext from './MemoryContext/MemoryContext'

import LandingPage from './LandingPage/LandingPage'
import Leaderboard from './Leaderboard/Leaderboard'
import Gameboard from './Gameboard/Gameboard'

class App extends React.Component {
  state = {
    player_name: '',
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

  leavingPage = () => {
    window.onbeforeunload = function(){
      return 'Are you sure you want to leave?';
    };
  }
  

  render() {

    const memoryValue = {
      player_name: this.state.player_name,
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
            <Link to='/' title='Home' className="title"><span className="flip">FLIP</span><span className="flop">FLOP</span></Link>
          </h1>
          <p className="memory-game" >Memory Game</p>
        </header>

        <Route
          exact path='/'
          component={LandingPage}
        />

        <Route
          path='/gameboard'
          component={Gameboard}
        />

        <Route
          path='/leaderboard'
          component={Leaderboard}
        />

        <footer role="contentinfo">
          <nav>
            <ul>
            <li><a href="https://github.com/erickmtza/flipflop-memory-game-client" onClick={this.leavingPage}>Github</a></li>
            <li><a href="https://www.linkedin.com/in/erick-martinez-169099162/" onClick={this.leavingPage}>LinkedIn</a></li>
          </ul>
          </nav>
          <section><strong>Developed 2019</strong></section>
        </footer>

      </MemoryContext.Provider>
    );
  }
  
}

export default App;
