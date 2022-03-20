import React from 'react';
import './nav.css'
import motto from '../../assets/image/akijmotto.png'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link to="/">
                        <a class="navbar-brand" href="/">AKIJ VENTURE</a>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/">
                                    <a class="nav-link">Home</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/about">
                                    <a class="nav-link">About</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/brands">
                                    <a class="nav-link">Brands</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/services">
                                    <a class="nav-link">Services</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact">
                                    <a class="nav-link">Contact</a>
                                </Link>
                            </li>
                        </ul>
                        <div>
                            <img src={motto} />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
