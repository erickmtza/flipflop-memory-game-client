import React, { useState, useEffect, useContext } from 'react'
import './Gameboard.css'
import Board from '../Board/Board'
import Modal from '../Modal/Modal'
import { Link } from 'react-router-dom'

import MemoryContext from '../MemoryContext/MemoryContext'

import randomizeDeck from '../RandomizeDeck/RandomizedDeck'

export default function Gameboard() {
    const value = useContext(MemoryContext)

    const [ready, setReady] = useState(false)
    const [timerReady, setTimerReady] = useState(false)
    const [timer, setTimer] = useState(0)
    const [cards, setCards] = useState([])
    const [flipped, setFlipped] = useState([])
    const [dimension, setDimension] = useState(100)
    const [solved, setSolved] = useState([])
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        const playerPost = {
            "player_name": value.player_name,
            "timer": timer,
        }

        console.log(playerPost)
        if (solved.length === 16 && timer !== 0) {
            fetch(`https://evening-fjord-94655.herokuapp.com/api/players`, {
                method: 'POST',
                body: JSON.stringify(playerPost),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => {
                        throw error
                    })
                }
                return res.json()
            })
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.error({ error })
            })
        }
    
    }, [timerReady])

    useEffect(() => {
        if (solved.length === 16) {
            setTimerReady(false)
        }
    }, [solved])
    
    useEffect(() => {
        console.log(`Start the timer?`)

            let stopwatch;
            if(stopwatch){
                console.log(`Stop timer 1`)
                clearInterval(stopwatch)
            }
            stopwatch = setInterval(() => {
                if(!!timerReady) {
                    console.log(`stopwatch ran`)
                    setTimer(timer => timer + 1)
                } else {
                    console.log(`Stop timer 2`)
                    clearInterval(stopwatch)
                }
            }, 1000)
            if(!timerReady && solved.length < 16) {
                console.log(`Stop timer 2`)
                clearInterval(stopwatch)
            }
            return () => { 
                console.log(`ran the return`)
                clearInterval(stopwatch);}

    }, [timerReady])

    useEffect(() => {
        resizeBoard()
        setCards(randomizeDeck())
    }, [])
    
    useEffect(() => {
        const resizeListener = window.addEventListener('resize', resizeBoard)

        return () => window.removeEventListener('resize', resizeListener)
    })

    const resizeBoard = () => {
        setDimension(Math.min(
            document.documentElement.clientHeight,
            document.documentElement.clientWidth,
        ))
    }

    const handleClick = (id) => {
        setDisabled(true)
        if (flipped.length === 0) {
            setFlipped([...flipped, id])
            setDisabled(false)
        } else {
            if (sameCardClicked(id)) return
                setFlipped([flipped[0], id])
            if (isMatch(id)) {
                setSolved([...solved, flipped[0], id])
                resetCards()
            } else {
                setTimeout(resetCards, 1000)
            }
        }
    }

    const sameCardClicked = (id) => flipped.includes(id)

    const isMatch = (id) => {
        const clickedCard = cards.find(card => card.id === id)
        const flippedCard = cards.find(card => flipped[0] === card.id)
        return flippedCard.type === clickedCard.type
    }

    const resetCards = () => {
        setFlipped([])
        setDisabled(false)
    }

    const readyPlay = () => {
        setReady(true)
        setTimerReady(true)
    }

    return (
        <main>
            {!ready && <Modal>
                <section class="modal-start">
                    {!value.player_name ? 
                    <><p>Please visit the home page to set up your player name.</p>
                    <Link to="/"><button className="modal-start-btn">Home</button></Link></>
                    :
                    (<><p>Click on a tile to reveal its identifying image. Click on a second tile to reveal a match or Not!! Non matches will revert to face down.</p>
                    <p>Do your best <strong>{value.player_name}</strong>!</p>
                    <p>Timer starts as soon as you click start!</p>
                    <button className="modal-start-btn" onClick={readyPlay} autoFocus={true} disabled={!value.player_name}>Start!</button></>)
                    }
                    
                </section>
                
            </Modal>}
            <section className="timer">
                <p>
                    <time>{timer}</time> s.
                </p>
            </section>
            <Board
                dimension={dimension}
                cards={cards}
                flipped={flipped}
                handleClick={handleClick}
                disabled={disabled}
                solved={solved}
            />
            {solved.length === 16 && timer !== 0 && <Modal>
                <fieldset>
                    <legend><h2>{value.player_name}'s Results</h2></legend>
                    <p>Completed in <strong>{timer}</strong> seconds!</p>
                    <Link to='leaderboard'><button className="modal-end-btn" autoFocus={true}>View Leaderboard</button></Link>
                </fieldset>
                <blockquote className="bq-modal" cite="http://www.theceugroup.com/12-surprising-human-memory-facts/">
                    <span>"</span>The storage capacity of the human brain is virtually limitless. Yep, <em>limitless</em>.<span>"</span>
                </blockquote>
            </Modal>
            }
        </main>
    )
}