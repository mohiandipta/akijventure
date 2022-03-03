import React from 'react';
import logo from '../assets/logo.jpg'
import Brands from './brands';

const About = () => {
    return (
        <div>
            <section className='about'>
                <div className='about-page-logo'>
                    <img src='https://www.akij.net/img/Founder-image.jpg' alt='image-logo' />
                </div>
                <div className='about-cards'>
                    <h2>One of the biggest conglomerates in Bangladesh.</h2>
                    <br />
                    {/* <h2>About</h2> */}
                    <p>The legacy of AKIJ GROUP is over half a century old and over the years Akij has established itself as the full of confidence and much revered industrial family of Bangladesh. It consists of 24 big concerns with diverse activities & different products.
                        Akij Group launched its venture as a small jute trader more than 50 years ago.</p>
                </div>
            </section>
        </div>
    );
}

export default About;
