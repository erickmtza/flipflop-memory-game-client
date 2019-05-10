import React from 'react';
import ReactDOM from 'react-dom';
import Leaderboard from './leaderboard';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Leaderboard />, div);
    ReactDOM.unmountComponentAtNode(div);
});