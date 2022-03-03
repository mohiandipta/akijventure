import React from 'react'
import clearup from '../../assets/products/clear-up.png'
import clemon from '../../assets/products/Clemon-250-ml-PET-1.png'
import frutika from '../../assets/products/FRUTIKAMango.png'
import mojo from '../../assets/products/mojo-can.png'
import farm_fresh_milk from '../../assets/products/Farm-Fresh-Mango-Milk.png'

const Products = () => {
    return (
        <div>
            <section className='brands' id='brands'>
                <div>
                    <h3>Brands</h3>
                </div>
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
                    <div className='products-card'>
                        <img src={farm_fresh_milk} alt='mojo' />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Products;



// export default function products() {
//     return (
//         <div className='brands' id='brands'>
//             <h3>Brands</h3>
//             <div className='products'>
//                 <div className='products-card'>
//                     <img src={clearup} alt='clearup' />
//                 </div>
//                 <div className='products-card'>
//                     <img src={clemon} alt='clemon' />
//                 </div>
//                 <div className='products-card'>
//                     <img src={frutika} alt='frutika' />
//                 </div>
//                 <div className='products-card'>
//                     <img src={mojo} alt='mojo' />
//                 </div>
//             </div>
//         </div>
//     )
// }
