import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

it('renders without crashing', () => {
    const type = "eevee"
    const div = document.createElement('div');
    
    ReactDOM.render(<Card type={type} />, div);
    ReactDOM.unmountComponentAtNode(div);
});