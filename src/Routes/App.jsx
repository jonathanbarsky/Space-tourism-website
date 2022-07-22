import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Fragment } from 'react';
import { Header } from '../components/Header.jsx'
import '../../styles/global.css'
import { Home } from '../components/Home.jsx';
import { Destination } from '../containers/Destination.jsx';
const App = () => {
    return ( 
        <React.Fragment>
            <Header />
            {/* <Home /> */}
            <Destination />
        </React.Fragment>
    );
};
export default App ;