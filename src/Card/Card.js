import React from 'react';
import path from 'path';
import './Card.css';

export default function Card({disabled, solved, handleClick, id, type, flipped, height, width}) {

    const imageType = require(`../img/${type}.png`);
    const classFlip = flipped ? 'flipped flip-container' : 'flip-container'
    
    return (
        <div
            tabIndex={0}
            className={classFlip}
            style={{ width, height }}
            onClick={() => disabled ? null : handleClick(id)}
        >
            <div className='flipper'>
                <img
                    style={{ width, height }}
                    className={flipped ? 'front' : 'back'}
                    src={flipped || solved ? imageType : require(`../img/back.png`)}
                    alt={type}
                />

            </div>
        </div>
    )
}