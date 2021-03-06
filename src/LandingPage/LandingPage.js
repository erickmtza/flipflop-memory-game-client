import React from 'react'
import './LandingPage.css'
import MemoryContext from '../MemoryContext/MemoryContext'
import { Link } from 'react-router-dom'

import Modal from '../Modal/Modal'
import GameGif from '../img/game-gif.gif'


function LandingPage(props) {
    return (
        <MemoryContext.Consumer>
            {(context) => {
                return (
                    <main>

                        <section>
                            <figure>
                                <img src={GameGif} alt="memory game board" />
                                <figcaption>Test your memory.<br />Flip tiles for a match</figcaption>
                            </figure>
                        </section>
                        <section className="engage-user">
                            <p>Jump right in and practice your memory skills or view the leaderboard for player stats.</p>
                            <section>
                                <button onClick={context.showNameModal}>Play Game</button>
                                <Link to='leaderboard'><button>Leaderboard</button></Link>
                            </section>
                        </section>
                        <blockquote cite="http://www.theceugroup.com/12-surprising-human-memory-facts/" className="lp-blockquote">
                            <span>"</span>You must exercise your mind just like any other muscle in your body. The harder you think about a memory, the more likely you are to remember it accurately. Thinking will create a stronger link between active neurons.<span>"</span>
                        </blockquote>

                        {context.showNameInput && <Modal>
                            <form onSubmit={e => context.updatePlayerName(e, props.history.push)}>
                                <fieldset>
                                    <legend><h2>Your Game Name</h2></legend>
                                    <p id="player-name">*This will be your name that will appear with your score in the leaderboard</p>
                                    <label htmlFor="name" className="player-name"><strong>Player Name:</strong></label><br />
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        aria-label="Your player name"
                                        aria-required="true"
                                        aria-describedby="player-name"
                                        placeholder="first name?"
                                        autoFocus={true}
                                        required
                                    />
                                    <button>Play</button>
                                </fieldset>
                            </form>
                            <button onClick={context.hideNameModal} className="close-btn">close</button>
                        </Modal>}

                    </main>
                    

                )
            }}
        </MemoryContext.Consumer>
    )
}

export default LandingPage