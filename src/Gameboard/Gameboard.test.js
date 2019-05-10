import React from 'react';
import ReactDOM from 'react-dom';
import Gameboard from './Gameboard';
import { BrowserRouter } from "react-router-dom";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Gameboard />
        </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
});