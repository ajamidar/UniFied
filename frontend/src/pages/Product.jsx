import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Product = () => {

  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('')

  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        console.log(item);
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId,products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Details */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row justify-center items-center'>
        {/* Product Image */}
        <img src={productData.image} alt={productData.name} className='w-48 h-48 object-cover' />
        <div className='flex flex-col'>
          <h2 className='text-2xl font-bold'>{productData.name}</h2>
          <p className='text-lg'>{productData.description}</p>
          <span className='text-xl font-semibold'>${productData.price}</span>
        </div>
      </div>

    </div>
  ) : <div className='opacity-0'></div>
}

export default Product