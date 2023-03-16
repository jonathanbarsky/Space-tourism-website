import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, useLocation } from 'react-router-dom';
import App  from './Routes/App'

ReactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>

, document.getElementById('root'));