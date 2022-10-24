import { getPlanets } from '../assets/API/Destinations';
import { Link } from 'react-router-dom';

function NavPlanets() {
    let planets = getPlanets(); 
    return(
        <nav className='destination_nav'>
            <ul className='destination_nav-list'>
                {planets.map((planet) => 
                    <li className='destination_nav-item'>
                        <Link to={`/destination/${planet.name}`}
                        key={planet.name}>{planet.name}</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export { NavPlanets };