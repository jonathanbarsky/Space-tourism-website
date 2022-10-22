import React from 'react';
import launch from '../assets/technology/image-launch-vehicle-landscape.jpg'
import launchDesktop from '../assets/technology/image-launch-vehicle-portrait.jpg'
import '../../styles/Technology.css'
import spaceport from '../assets/technology/image-spaceport-landscape.jpg'
import spaceportDesktop from '../assets/technology/image-spaceport-portrait.jpg'
import capsule from '../assets/technology/image-space-capsule-landscape.jpg'
import capsuleDesktop from '../assets/technology/image-space-capsule-portrait.jpg'

class Technology extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nameVehicle: 'launch vehicle',
            copy: "a launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
            image: launch,
            imageDesktop: launchDesktop,
        }
    }
    render(){
        return(
            <main className='technology'>
                <h2 className='technology_statement'><span>03</span> space launch 101</h2>
                <figure className='technology_figure'>
                    <picture>
                        <source media="(min-width: 900px)" srcSet={this.state.imageDesktop} alt="vehicle spacial" />
                        <img className='technology_image' src={this.state.image} alt="vehicle spacial" />
                    </picture>
                </figure>
                <nav className='technology_nav'>
                    <ul className='technology_nav-list'>
                        <li className='technology_nav-item' 
                            onClick={() => this.setState(prevState => ({
                                nameVehicle: 'launch vehicle',
                                copy: "a launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
                                image: launch,
                                imageDesktop: launchDesktop,
                            }))}
                        >1</li>
                        <li className='technology_nav-item'
                            onClick={() => this.setState(prevSate => ({
                                nameVehicle: 'spaceport',
                                copy: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
                                image: spaceport,
                                imageDesktop: spaceportDesktop,
                            }))}
                        >2</li>
                        <li className='technology_nav-item'
                            onClick={() => this.setState(prevState => ({
                                nameVehicle: 'space capsule',
                                copy: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
                                image: capsule,
                                imageDesktop: capsuleDesktop,
                            }) )}
                        >3</li>
                    </ul>
                </nav>
                <div className='technology_chosen'>
                    <p className='technology_paragraph'>the terminology</p>
                    <h3 className='technology_vehicle'>{this.state.nameVehicle}</h3>
                    <p className='technology_copy'>{this.state.copy}</p>
                </div>
            </main>
        )
    }
}

export { Technology };