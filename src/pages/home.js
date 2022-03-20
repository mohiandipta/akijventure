import React from 'react';
import banner from '../assets/building.jpg'
import AboutUs from './about';
import Brands from './brands';
import Services from './services';
import Contact from './contact';
import Banner from '../components/banner/banner';

const Home = () => {
    return (
        <div className='house'>
            <Banner />
            {/* <div>
                <div className='home'>
                    <div className='banner'>
                        <img src={banner} id='banner-image' alt="akij house" />
                    </div>
                </div>
            </div> */}
            <div className='body-woutbanner'>
                <AboutUs />
                <Brands />
                <Services />
                <Contact />
            </div>
        </div>
    );
}

export default Home;
