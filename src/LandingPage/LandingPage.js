import React from 'react'
import './LandingPage.css'
import MemoryContext from '../MemoryContext/MemoryContext'
import { Link } from 'react-router-dom'

import Modal from '../Modal/Modal'



function LandingPage(props) {
    return (
        <MemoryContext.Consumer>
            {(context) => {
                console.log(context.showNameInput)
                return (
                    <main>

                        <div>
                            <p>Test your memory.<br />Flip tiles for a match</p>
                            <p>[image placeholder]</p>
                        </div>
                        <div>
                            <p>Jump right in and practice your memory skills or view the leaderboard for player stats.</p>
                            <button
                                onClick={context.showNameModal}>Play Game</button>
                            <Link to='leaderboard'><button>Leaderboard</button></Link>
                        </div>
                        <blockquote cite="http://www.theceugroup.com/12-surprising-human-memory-facts/">
                            "You must exercise your mind just like any other muscle in your body. The harder you think about a memory, the more likely you are to remember it accurately. Thinking will create a stronger link between active neurons."
                        </blockquote>

                        {context.showNameInput && <Modal>
                            <form onSubmit={e => context.updatePlayerName(e, props.history.push)}>
                                <fieldset>
                                    <legend><h2>Your Game Name</h2></legend>
                                    <p>*This will be your name that will appear with your score in the leaderboard</p>
                                    <label htmlFor="name" >Player Name:</label><br />
                                    <input id="name" type="text" name="name" placeholder="first name?" autoFocus={true} required />
                                    <button>Play</button>
                                </fieldset>
                            </form>
                            <button onClick={context.hideNameModal}>close</button>
                        </Modal>}

                    </main>
                    

                )
            }}
        </MemoryContext.Consumer>
    )
}

export default LandingPage