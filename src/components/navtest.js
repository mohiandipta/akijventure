import React from 'react';
import motto from '../assets/image/akijmotto.png'
import { Link } from 'react-router-dom';

const Navtest = () => {



    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Akij Venture Group</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse navbar-light bg-light" id="navbarNav">
                    <ul class="navbar-nav">

                        <li class="nav-item">
                            <Link to={'/'}>
                                <a class="logo">Akij Venture Group</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/'}><a>Home</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/about'}><a>About</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/brands'}><a>Brands</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/services'}><a>Services</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/contact'}><a>Contact</a></Link>
                        </li>
                        <img src={motto} />
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navtest;
