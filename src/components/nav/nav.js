import React from 'react';
import motto from '../../assets/image/akijmotto.png'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='nav'>
            <header>
                <Link to={'/'}>
                    <a class="logo">Akij Venture Group</a>
                </Link>
                <div class="toggle"></div>
                <Link to={'/'}><a>Home</a></Link>
                <Link to={'/about'}><a>About</a></Link>
                <Link to={'/brands'}><a>Brands</a></Link>
                <Link to={'/services'}><a>Services</a></Link>
                <Link to={'/contact'}><a>Contact</a></Link>
                {/* <ul class="menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#brands">Brands</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul> */}
                <img src={motto} />
            </header>
        </div>
    )
}

export default Nav;
