import React from 'react';
import menuIcon from '../assets/shared/icon-hamburger.svg';
import logo from '../assets/shared/logo.svg';
import '../../styles/Header.css'
import { Link } from 'react-router-dom';
import {useScreenSize} from '../hooks/useScreenSize';

function Header({background, setBackground}) {
    const { width } = useScreenSize();
    const [showMenu, setShowMenu] = React.useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
    return(
        <header className="header">
            <figure className="header-menu_logo">
                <img src={logo} alt="logo de Turismo Espacial" />
            </figure>
            <nav className="header-menu">
                <ul className="header-menu-hamburger">
                    <img src={menuIcon} alt="Icono del menu" onClick={toggleMenu}/>
                    {(!!showMenu || width >= 650) && (
                        <ul className='header-menu--nav'>
                            <li><span>00</span><Link to="/" > Home</Link></li>
                            <li><span>01</span><Link to="destination" > Destination</Link></li>
                            <li><span>02</span><Link to="crew"> Crew</Link></li>
                            <li><span>03</span><Link to="technology"> Technology</Link></li>
                        </ul>
                    )}
                </ul>
            </nav>
        </header> 
    )
}
export { Header };