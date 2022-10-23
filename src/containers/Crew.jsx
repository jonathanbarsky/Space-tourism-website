import React from 'react';
import '../../styles/Crew.css'
import commander from '../assets/crew/image-douglas-hurley.png';
import missionSpecialist from '../assets/crew/image-mark-shuttleworth.png';
import pilot from '../assets/crew/image-victor-glover.png';
import engineer from '../assets/crew/image-anousheh-ansari.png';
import { CrewLoadingSkeleton } from './CrewLoadingSkeleton';

class Crew extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            image: commander,
            rank: 'commander',
            name: 'douglas hurley',
            copy: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
            loading: false,
        }
    }
    componentDidUpdate(){
        if(!!this.state.loading){
            setTimeout(() => this.setState(prevState => ({
                loading: false,
            })), 100000)
        }
    }
    render(){
        if(!!this.state.loading){
            return(
                <CrewLoadingSkeleton />
            )
        } else{
            return(
                <main className='crew'>
                    <h2 className='crew_statement'><span>02</span>meet your crew</h2>
                    <figure className='crew_figure'>
                        <img className='crew_img' src={this.state.image} alt="" />
                    </figure>
                    <nav className='crew_nav'>
                        <ul className='crew_nav-list'>
                            <li className='crew_nav-item' 
                                onClick={() => this.setState(prevState => ({
                                    image: commander,
                                    rank: 'commander',
                                    name: 'douglas hurley',
                                    copy: 'douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
                                    loading: true,
                            }))}></li>
                            <li className='crew_nav-item' 
                                onClick={() => this.setState(prevState => ({
                                    image: missionSpecialist,
                                    rank: 'mission specialist ',
                                    name: 'mark shuttleworth',
                                    copy: 'mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
                                    loading: true,
                            }))}></li>
                            <li className='crew_nav-item' 
                                onClick={() => this.setState(prevState => ({
                                    image: pilot,
                                    name: 'victor glover',
                                    rank: 'pilot',
                                    copy: 'pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
                                    loading: true,
    
                            }))}></li>
                            <li className='crew_nav-item' 
                                onClick={() => this.setState(prevState => ({
                                    image: engineer,
                                    name: 'anousheh ansari',
                                    rank: 'floght engineer',
                                    copy: 'anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
                                    loading: true,
                            }))}></li>
                        </ul>
                    </nav>
                    <div className='crew_chosen'>
                        <p className='crew_rank'>{this.state.rank}</p>
                        <h3 className='crew_name'>{this.state.name}</h3>
                        <p className='crew_copy'>{this.state.copy}</p>
                    </div>
                </main>
            )
        }
    }
    }

export { Crew };