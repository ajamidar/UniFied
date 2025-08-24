import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';

const Product = () => {

  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        console.log(item);
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId,products])

  return productData ? (
    <div className='border-t-1 mt-2 pt-2 transition-opacity ease-in duration-500 opacity-100'>

      {/* Product Details */}

      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row justify-center items-center'>

        {/* Product Image */}

        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} key={index} src={item} alt={`Product Image ${index + 1}`} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} alt={`Product Image Main`} className='w-full h-auto' />
          </div>
        </div>

        {/*Product Info*/}
        <div className='flex-1'>
          <h1 className='text-2xl mt-2 font-medium'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <h2>Seller rating:</h2>
            <img src={assets.star_icon} alt="star-icon" className='w-3 5'/>
            <img src={assets.star_icon} alt="star-icon" className='w-3 5'/>
            <img src={assets.star_icon} alt="star-icon" className='w-3 5'/>
            <img src={assets.star_icon} alt="star-icon" className='w-3 5'/>
            <img src={assets.star_dull_icon} alt="star-icon" className='w-3 5'/>
            <p className='pl-1'>(122) reviews</p>
          </div>
          <p className='mt-3 text-2xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-2 text-lg font-light text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-1 my-5'>
            <p>Size:</p>
            <div className='flex flex-wrap gap-2'>
              {productData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} key={index} className={`border scale-up cursor-pointer border-gray-300 ${size === item ? 'border-blue-500!' : ''} hover:bg-[#8ccdff] rounded-full px-3 py-1 text-sm`}>
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button className='bg-blue-700 rounded-2xl text-white px-8 py-3 text-sm active:bg-blue-900 cursor-pointer'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>✅Verified Seller</p>
              <p>🔄Easy return available within 7 days</p>
              <p>🔒Secure payment protection via Stripe</p>
          </div>
        </div>
      </div>

      {/* Description & Review Section */}

      <div className='mt-10'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Seller reviews(122) </p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>A soft and stylish pink t-shirt made from breathable cotton fabric, perfect for everyday wear. Designed with a classic crew neckline and short sleeves.</p>
          <p>The vibrant pink shade adds a pop of color to your wardrobe, making it suitable for both casual outings and laid-back lounging. Durable, lightweight, and easy to care for—this pink tee is a versatile essential you’ll reach for again and again.</p>
        </div>
      </div>

    </div>
  ) : <div className='opacity-0'></div>
}

export default Product