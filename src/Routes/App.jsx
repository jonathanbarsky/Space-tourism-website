import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { Header } from '../components/Header.jsx'
import '../../styles/global.css'
import { Home } from '../components/Home.jsx';
import { Destination } from '../containers/Destination.jsx';
import { Crew } from '../containers/Crew.jsx';
import { Technology } from '../containers/Technology.jsx';
import { GridExample } from '../components/practiceGrid.jsx';
import { getDestinations } from '../assets/API/Destinations';
import { PageNotFound } from '../containers/PageNotFound.jsx';
import moonImg from '../assets/destination/image-moon.png'
import mars from '../assets/destination/image-mars.png'
import europe from '../assets/destination/image-europa.png'
import titan from '../assets/destination/image-titan.png'


const App = () => {
    const planets = [ 
        {
            name: 'moon',
            // image: '../destination/image-moon.png',
            description: 'see our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
            distance: '384.400 KM',
            travelTime: '3 days',
        },
        {
            name: 'mars',
            // image: {moon},
            description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
            distance: '225 MIL. KM',
            travelTime: '9 months',
        },
        {
            name: 'europa',
            // image: '../destination/image-europa.png',
            description: 'the smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
            distance: '628 MIL. KM',
            travelTime: '3 year',
        },
        {
            name: 'titan',
            // image: '../destination/image-titan.png',
            description: 'the only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
            distance: '1.6 BIL. KM',
            travelTime: '7 years',
        }
    ]
    const moon = {
        id: 1,
        name: 'moon',
        image:{moonImg},
        description: 'see our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        distance: '384.400 KM',
        travelTime: '3 days',
    }
    const mars = {
        id: 2,
        name: 'mars',
        image: {mars},
        description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        distance: '225 MIL. KM',
        travelTime: '9 months',
    }
    const europe =  {
        id: 3,
        name: 'europe',
        image: {europe},
        description: 'the smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        distance: '628 MIL. KM',
        travelTime: '3 year',
    }
    const titan = {
        id: 4,
        name: 'titan',
        image: {titan},
        description: 'the only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        distance: '1.6 BIL. KM',
        travelTime: '7 years',
    }
    return ( 
        <React.Fragment>
            <Header />
            {/* <GridExample /> */}
            <Routes>
                <Route path="/" element= {<Home />} />
                <Route path='/destination' element= {<Destination />} /> 
                <Route path="crew" element= {<Crew />} />
                <Route path="technology" element= {<Technology />} />
                <Route path="*" element={<PageNotFound userName='Eduard Francisco' />} />
            </Routes>
        </React.Fragment>
    );
};
export default App ;
{/* <Route path='/destination/mars' element= {<Planet key={mars.name}
                        name={mars.name} 
                        description={mars.description}
                        distance={mars.distance}
                        travelTime={mars.travelTime} />} /> 
                    <Route path='/destination/europe' element= {<Planet key={europe.name}
                        name={europe.name} 
                        description={europe.description}
                        distance={europe.distance}
                        travelTime={europe.travelTime} />} /> 
                    <Route path='/destination/titan' element= {<Planet key={titan.name}
                        name={titan.name} 
                        description={titan.description}
                        distance={titan.distance}
                        travelTime={titan.travelTime} />} />  */}