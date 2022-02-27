import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header>
            <a href="#" class="logo">Akij Venture Group</a>
            <div class="toggle"></div>
            <ul class="menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#brands">Brands</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </header>
    )
}

export default Nav;
