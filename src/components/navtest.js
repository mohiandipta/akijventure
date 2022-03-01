import React from 'react';
import { Link } from 'react-router-dom';

const Navtest = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Akij Venture Group</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-item" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-item" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-item" href="#">Brands</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-item" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-item" href="#">Contacts</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navtest;
