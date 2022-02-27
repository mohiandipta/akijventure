import React from 'react';
import logo from '../assets/logo.jpg'

const About = () => {
    return (
        <section className='about' id='about'>
            {/* <h3>About</h3> */}
            <div className='about-page-logo'>
                <img src={logo} alt='image-logo' />
            </div>
            <div className='cards'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales viverra felis et lobortis. Donec eu justo at quam tempor pretium. Pellentesque tempus, augue vitae cursus porttitor, mi ipsum imperdiet nibh, a blandit est metus ut sem. Praesent pulvinar augue diam, sit amet consectetur urna sodales porta. Vivamus fermentum interdum est non tempus. Fusce fermentum quam ac nisi mattis laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium convallis dignissim. Nam et sapien nec dolor euismod mattis eu non risus.</p>
            </div>
        </section>
    );
}

export default About;
