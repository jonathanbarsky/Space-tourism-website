import React from 'react';
import {Link} from 'react-router-dom'
import mars from '../assets/destination/image-mars.png'
import moon from '../assets/destination/image-moon.png'
import europe from '../assets/destination/image-europa.png'
import titan from '../assets/destination/image-titan.png'
import { PlanetLoadingSkeleton } from './DestinationLoadingSkeleton';
import backgroundDestinationMobile from "../assets/destination/background-destination-mobile.jpg"
import backgroundDestinationTablet from "../assets/destination/background-destination-tablet.jpg"
import backgroundDestinationDesktop from "../assets/destination/background-destination-desktop.jpg"
import "../../styles/Destination.css";

function Destination({state, setState}){
    const onMoon = () => setState({
        loading:true,
        name: 'moon',
        image: moon,
        description: 'see our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        distance: '384.400 KM',
        travelTime: '3 days',
    })
    const onMars = () => setState({
        loading:true,
        name: 'mars',
        image: mars,
        description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        distance: '225 MIL. KM',
        travelTime: '9 months',
    })
    const onEurope = () => setState({
        loading:true,
        name: 'europe',
        image: europe,
        description: 'the smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        distance: '628 MIL. KM',
        travelTime: '3 year',
    })
    const onTitan = () => setState({
        loading:true,
        name: 'titan',
        image: titan,
        description: 'the only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        distance: '1.6 BIL. KM',
        travelTime: '7 years',
    })
    const onLoad = () => setState({
        ...state,
        loading: false,
    })
    const onDestination= () => setState({
        ...state,
        backgroundImage: backgroundDestinationMobile,
    })
React.useEffect(() => {
    if(!!state.loading){
        setTimeout(() => onLoad(), 1000)
    }
}, [state.loading])

    if(!!state.loading){
        return(
            <PlanetLoadingSkeleton />
        )
    } else{
        return(
            <main className='destination'>
                    <h2 className='destination_statement'><span>01</span>pick your destination</h2>
                    <div className='destination_body'>
                    <figure className='destination_figure'>
                        <img className='destination_image' src= {state.image} alt="" />
                    </figure>
                    <div>
                        <nav className='destination_nav'>
                            <ul className='destination_nav-list'>
                                <li className='destination_nav-item'>
                                    <Link to={`/destination`} 
                                        onClick={() => onMoon()}>moon</Link>
                                </li>
                                <li className='destination_nav-item'>
                                    <Link to={`/destination`} onClick={() => onEurope()}>europe</Link>
                                </li>
                                <li className='destination_nav-item'>
                                    <Link to={`/destination`} 
                                        onClick={() => onMars()}>mars</Link>
                                </li>
                                <li className='destination_nav-item'>
                                    <Link to={`/destination`}
                                        onClick={() => onTitan()}
                                    >titan</Link>
                                </li>
                            </ul>
                        </nav>
                        <h2 className='destination_planet'>{state.name}</h2>
                        <p className='destination_planet-description'>{state.description}</p>
                        <div className='destination_trip'>
                            <div className='destination_trip-distance'>
                                <p>avg. distance</p>
                                <p>{state.distance}</p>
                            </div>
                            <div className='destination_trip-time'>
                                <p>est. travel time</p>
                                <p>{state.travelTime}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
    
}
export { Destination };