import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import randomizeDeck from '../RandomizeDeck/RandomizedDeck'

it('renders without crashing', () => {
    const cards = randomizeDeck()
    const flipped = []
    const solved = []

    const div = document.createElement('div');
    ReactDOM.render(<Board cards={cards} flipped={flipped} solved={solved} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
