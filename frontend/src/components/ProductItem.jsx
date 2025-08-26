import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContextContext';
import { Link, useParams } from 'react-router-dom';

const ProductItem = ({id,image,name,price}) => {

    const {currency} = useContext(ShopContext);

    const {selectedUni} = useParams(); 

  return (
    <>
        <Link to={`/${selectedUni}/product/${id}`} className='text-[#333333] cursor-pointer'>
            <div className='overflow-hidden'>
                <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
            </div>
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'>{currency}{price}</p> 
        </Link>
    </>
  )
}

export default ProductItem