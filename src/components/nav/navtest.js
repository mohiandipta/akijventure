import React from 'react';
import motto from '../assets/image/akijmotto.png'
import { Link } from 'react-router-dom';

const Navtest = () => {



    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to={'/'}>
                                    <a class="logo">Akij Venture Group</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'/'}><a>Home</a></Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Production
                                </a>

                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Animation</a></li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li><a class="dropdown-item" href="#">Book</a></li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li><a class="dropdown-item" href="#">Comics</a></li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li><a class="dropdown-item" href="#">Dubbing</a></li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li><a class="dropdown-item" href="#">Feature Video</a></li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li><a class="dropdown-item" href="#">Nurer Chowa</a></li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            <a class="dropdown-item">Blog</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li><a class="dropdown-item" href="#">Tafsir</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact">
                                    <a class="nav-link">Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>










            {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
            </nav> */}
        </div>
    );
}

export default Navtest;
