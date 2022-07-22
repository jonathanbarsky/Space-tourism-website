import React from 'react';
import menuIcon from '../assets/shared/icon-hamburger.svg';
import logo from '../assets/shared/logo.svg';
import '../../styles/Header.css'

function Header() {
    return(
        <header className="header">
            <figure className="header-menu_logo">
                <img src={logo} alt="logo de Turismo Espacial" />
            </figure>
            <nav className="header-menu">
                <ul className="header-menu-hamburger">
                    <img src={menuIcon} alt="Icono del menu" />
                    <ul className='header-menu--nav'>
                        <li><span>00</span> Home</li>
                        <li><span>01</span> Destination</li>
                        <li><span>02</span> Crew</li>
                        <li><span>03</span> Technology</li>
                    </ul>
                </ul>
            </nav>
        </header> 
    )
}
export { Header };