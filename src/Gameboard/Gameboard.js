import React, { useState, useEffect, useContext } from 'react'
import Board from '../Board/Board'
import Modal from '../Modal/Modal'

import MemoryContext from '../MemoryContext/MemoryContext'

import randomizeDeck from '../RandomizeDeck/RandomizedDeck'

export default function Game() {
    const value = useContext(MemoryContext)

    const [ready, setReady] = useState(false)
    const [timerReady, setTimerReady] = useState(false)
    const [timer, setTimer] = useState(0)
    const [cards, setCards] = useState([])
    const [flipped, setFlipped] = useState([])
    const [dimension, setDimension] = useState(100)
    const [solved, setSolved] = useState([])
    const [disabled, setDisabled] = useState(false)

    function timerCounter() {
        if(timerReady) {
            const stopwatch = setInterval(() =>
                setTimer(timer => timer + 1)
            , 1000)
        }
    }

    useEffect(() => {
        timerCounter()
        // return function stopTimer() {
        //     clearInterval()
        // }
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
            setFlipped((flipped) => [...flipped, id])
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
        <div>
            {!ready && <Modal>
                <p>Do your best {value.player_name}!</p>
                <p>Timer starts as soon as you click start!</p>
                <button onClick={readyPlay} autoFocus={true}>Start!</button>
            </Modal>}
            <p>Time: {timer} s.</p>
            <Board
                dimension={dimension}
                cards={cards}
                flipped={flipped}
                handleClick={handleClick}
                disabled={disabled}
                solved={solved}
            />
        </div>
    )
}