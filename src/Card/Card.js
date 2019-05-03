import React from 'react'
import './Card.css'

export default function Card({disabled, solved, handleClick, id, type, flipped, height, width}) {
    
    return (
        <div
            tabIndex={0}
            className={`flip-container ${flipped ? 'flipped' : ''}`}
            style={{ width, height }}
            onClick={() => disabled ? null : handleClick(id)}
        >
            <div className='flipper'>
                <img
                    style={{ width, height }}
                    className={flipped ? 'front' : 'back'}
                    src={flipped || solved ? `/img/${type}.png` : `/img/back.png`}
                    alt={type}
                />

            </div>
        </div>
    )
}