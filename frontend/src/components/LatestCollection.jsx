import React, { use, useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0,10)); // Assuming products are sorted by date, get the last 4 products
    },[])


    return (
        <div className='mt-10 mb-5 max-sm:mt-5 max-sm:mb-2.5'>

            {/*Rendering products*/}

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 px-4'>
                {
                    latestProducts.map((item, index) => (
                        <ProductItem
                            key={index}
                            id={item._id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                            />
                    ))
                }
            </div>

        </div>
    )
}

export default LatestCollection