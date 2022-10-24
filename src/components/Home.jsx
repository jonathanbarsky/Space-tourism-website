import React from 'react';
import group from '../assets/home/Group.png';
import '../../styles/Home.css';

function Home(){
    return (
        <main className='home'>
            <div>
                <h1 className='home_title'>SO, YOU WANT TO TRAVEL TO <br /><span>SPACE</span></h1>
                <p className='home_copy'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <figure className='home_figure'>
                <img className='home_image' src={group} alt="Explore image" />
            </figure>
        </main>
    )
}

export { Home };