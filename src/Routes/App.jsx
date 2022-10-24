import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../components/Header.jsx'
import '../../styles/global.css'
import { Home } from '../components/Home.jsx';
import { Destination } from '../containers/Destination.jsx';
import { Crew } from '../containers/Crew.jsx';
import { Technology } from '../containers/Technology.jsx';
import { PageNotFound } from '../containers/PageNotFound.jsx';
import moon from '../assets/destination/image-moon.png'

const App = () => {
    const [planet, setPlanet] = React.useState({
        loading: false,
        name: 'moon',
        image: moon,
        description: 'see our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        distance: '384.400 KM',
        travelTime: '3 days',
    })
    return ( 
        <React.Fragment>
            <Header />
            <Routes>
                <Route path="/" element= {<Home />} />
                <Route path='/destination' element= {<Destination state={planet} setState={setPlanet}/>} /> 
                <Route path="crew" element= {<Crew />} />
                <Route path="technology" element= {<Technology />} />
                <Route path="*" element={<PageNotFound userName='Eduard Francisco' />} />
            </Routes>
        </React.Fragment>
    );
};
export default App ;