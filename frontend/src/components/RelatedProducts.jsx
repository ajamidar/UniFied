import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import ProductItem from './ProductItem';

const RelatedProducts = ({category, subCategory}) => {

    const {products} = useContext(ShopContext);
    const [related, setRelated] = useState([]);
    const productId = useParams().productId;

    useEffect(() => {

        if (products.length > 0){
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => item.category === category && item.subCategory === subCategory && item._id !== productId);
            setRelated(productsCopy.slice(0, 5));
        }
    }, [category, subCategory, products]);

    return (
        <div className='mt-10'>
            <h2 className='text-2xl font-medium'>Related Products</h2>
            <div className='flex flex-row gap-2 mt-2'>
                {related.map((item, index) => (
                    <ProductItem className='related-product'
                        key={index}
                        id={item._id}
                        image={item.image}
                        name={item.name}
                        price={item.price} />
                ))}
            </div>
        </div>
    )
}

export default RelatedProducts