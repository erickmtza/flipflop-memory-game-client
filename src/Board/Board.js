import React from 'react'

import Card from '../Card/Card'

import './Board.css'

export default function Board({disabled, dimension, cards, solved, flipped, handleClick}) {
    return (
        <div className='board '>
            {cards.map((card) => (
                <Card
                    key={card.id}
                    id={card.id}
                    type={card.type}
                    width={dimension < 700 ? dimension / 4.25 : 700 / 4.5}
                    height={dimension < 700 ? dimension / 4.5 : 700 / 4.5}
                    flipped={flipped.includes(card.id)}
                    handleClick={handleClick}
                    solved={solved.includes(card.id)}
                    disabled={disabled || solved.includes(card.id) || flipped.includes(card.id)}
                />
            ))}
        </div>
    )

}