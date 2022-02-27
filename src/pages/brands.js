import React from 'react';
import { Card } from 'react-bootstrap';
import clearup from '.././assets/products/clear-up.png'
import clemon from '.././assets/products/Clemon-250-ml-PET-1.png'

const Brands = () => {
    return (
        <div className='brands' id='brands'>
            <div className='products'>
                <div className='products-card'>
                    <img src={clearup} alt='' />
                </div>
            </div>
        </div>
    );
}

export default Brands;
