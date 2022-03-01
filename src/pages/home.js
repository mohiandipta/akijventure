import React from 'react';
import banner from '../assets/building.jpg'
import AboutUs from './about';
import Brands from './brands';
import Services from './services';
import Contact from './contact';

const Home = () => {
    return (
        <div className='house'>
            <div>
                <section className='home'>
                    <div className='banner'>
                        <img src={banner} id='banner-image' alt="akij house" />
                    </div>
                </section>
            </div>
            <AboutUs />
            <Brands />
            <Services />
            <Contact />
        </div>
    );
}

export default Home;
