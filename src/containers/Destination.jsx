import React from 'react';
import moon from '../assets/destination/image-moon.png'
import '../../styles/Destination.css'
function Destination() {
    return(
        <main className='destination'>
            <h2 className='destination_statement'><span>01</span>pick your destination</h2>
            <div className='destination_body'>
                <figure className='destination_figure'>
                    <img className='destination_image' src={moon} alt="" />
                </figure>
                <div>
                    <nav className='destination_nav'>
                        <ul className='destination_nav-list'>
                            <li className='destination_nav-item'>moon</li>
                            <li className='destination_nav-item'>MARS</li>
                            <li className='destination_nav-item'>EUROPA</li>
                            <li className='destination_nav-item'>TITAN</li>
                        </ul>
                    </nav>
                    <h2 className='destination_planet'>MOON</h2>
                    <p className='destination_planet-description'>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                    <div className='destination_trip'>
                        <div className='destination_trip-distance'>
                            <p>avg. distance</p>
                            <p>384,400 km</p>
                        </div>
                        <div className='destination_trip-time'>
                            <p>est. travel time</p>
                            <p>3 days</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export { Destination };