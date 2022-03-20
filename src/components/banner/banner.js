import React from 'react';
import './banner.css'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='banner-section'>
            <div className='banner'>
                <img src='https://www.akij.net/img/building.jpg' />
            </div>

            <div className='banner-info'>
                <div className='banner-header'>
                    <h1>AKIJ VENTURE GROUP</h1>
                </div>
                <Button variant="contained" className="banner_button" >
                    <Link to='#'>
                        <a>Our Companies</a>
                    </Link>
                </Button>
            </div>
        </div>
    );
}

export default Banner;
