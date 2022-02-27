import React from 'react';
import clearup from '.././assets/products/clear-up.png'
import clemon from '.././assets/products/Clemon-250-ml-PET-1.png'
import frutika from '.././assets/products/FRUTIKA-_-MANGO-_-250G-1 (1).png'
import mojo from '.././assets/products/mojo-can.png'

const Brands = () => {
    return (
        <div className='brands' id='brands'>
            <h3>Brands</h3>
            <div className='products'>
                <div className='products-card'>
                    <img src={clearup} alt='clearup' />
                </div>
                <div className='products-card'>
                    <img src={clemon} alt='clemon' />
                </div>
                <div className='products-card'>
                    <img src={frutika} alt='frutika' />
                </div>
                <div className='products-card'>
                    <img src={mojo} alt='mojo' />
                </div>
            </div>
        </div>
    );
}

export default Brands;
