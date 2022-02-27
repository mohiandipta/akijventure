import React from 'react';
import banner from '../assets/building.jpg'

const Home = () => {
    return (
        <section className='home' id='home'>
            <div className='banner'>
                <img src={banner} alt="description of image" />
            </div>
        </section>
    );
}

export default Home;
