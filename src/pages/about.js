import React from 'react';
import logo from '../assets/logo.jpg'
import Brands from './brands';

const About = () => {
    return (
        <div>
            <section className='about'>
                <div className='about-page-logo'>
                    <img src={logo} alt='image-logo' />
                </div>
                <div className='about-cards'>
                    <h1>Under Construction</h1>
                    <h2>About</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales viverra felis et lobortis. Donec eu justo at quam tempor pretium. Pellentesque tempus, augue vitae cursus porttitor, mi ipsum imperdiet nibh, a blandit est metus ut sem. Praesent pulvinar augue diam, sit amet consectetur urna sodales porta. Vivamus fermentum interdum est non tempus. Fusce fermentum quam ac nisi mattis laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium convallis dignissim. Nam et sapien nec dolor euismod mattis eu non risus.</p>
                </div>
            </section>
        </div>
    );
}

export default About;
