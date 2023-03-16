import React from 'react';
import menuIcon from '../assets/shared/icon-hamburger.svg';
import logo from '../assets/shared/logo.svg';
import '../../styles/Header.css'
import { Link } from 'react-router-dom';

function Header({background, setBackground}) {
    function getTechnologyStyles(){
        import('../../styles/Technology.css')
            .then(() => {
                console.log("Estilo cargado");
            })
            .catch((err) => {
                console.error(err)
            })
    }
    function getCrewStyles(){
        import("../../styles/Crew.css")
    }
    function getDestinationStyles(){
        import("../../styles/Destination.css")
    }
    return(
        <header className="header">
            <figure className="header-menu_logo">
                <img src={logo} alt="logo de Turismo Espacial" />
            </figure>
            <nav className="header-menu">
                <ul className="header-menu-hamburger">
                    <img src={menuIcon} alt="Icono del menu" />
                    <ul className='header-menu--nav'>
                        <li><span>00</span><Link to="/" > Home</Link></li>
                        <li><span>01</span><Link to="destination" onClick={getDestinationStyles}> Destination</Link></li>
                        <li><span>02</span><Link to="crew" onClick={getCrewStyles}> Crew</Link></li>
                        <li><span>03</span><Link to="technology" onClick={getTechnologyStyles}> Technology</Link></li>
                    </ul>
                </ul>
            </nav>
        </header> 
    )
}
export { Header };