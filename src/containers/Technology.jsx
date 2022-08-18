import React from 'react';
import vehicle from '../assets/technology/image-launch-vehicle-landscape.jpg'
import vehicleBig from '../assets/technology/image-launch-vehicle-portrait.jpg'
import '../../styles/Technology.css'

class Technology extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nameVehicle: 'launch vehicle',
            copy: ,
            image: ,
            imageDesktop: ,
        }
    }
    render(){
        return(
            <main className='technology'>
                <h2 className='technology_statement'><span>03</span> space launch 101</h2>
                <figure className='technology_figure'>
                    <picture>
                        <source media="(min-width: 900px)" srcset={vehicleBig} alt="vehicle spacial" />
                        <img className='technology_image' src={vehicle} alt="vehicle spacial" />
                    </picture>
                </figure>
                <nav className='technology_nav'>
                    <ul className='technology_nav-list'>
                        <li className='technology_nav-item'>1</li>
                        <li className='technology_nav-item'>2</li>
                        <li className='technology_nav-item'>3</li>
                    </ul>
                </nav>
                <div className='technology_chosen'>
                    <p className='technology_paragraph'>the terminology</p>
                    <h3 className='technology_vehicle'>launch vehicle</h3>
                    <p className='technology_copy'>a launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                </div>
            </main>
        )
    }
}

export { Technology };