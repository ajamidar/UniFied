import React, { useContext, useEffect, useState, useRef } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const { productId, selectedUni } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId,products])

  const handleMouseMove = (e) => {
    if (imageRef.current) {
      const { left, top, width, height } = imageRef.current.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      setMousePosition({ x, y });
    }
  };

  return productData ? (
    <>
      <div className='flex pt-1.5'>
        <NavLink to={`/${selectedUni}`} className='text-blue-700 hover:underline w-full'>
          <button className='bg-blue-700 w-full rounded-2xl text-white sm:text-sm max-sm:text-sm px-1.5 py-1.5 font-bold hover:bg-blue-800 cursor-pointer'>Return to {selectedUni}'s Home</button>
        </NavLink>
        
      </div>
      <div className='border-t-1 mt-2 transition-opacity ease-in duration-500 opacity-100'>

        {/* Product Details */}

        <div className='flex gap-12 sm:gap-12 max-sm:gap-6 flex-col sm:flex-row justify-center items-center'>

          {/* Product Image */}

          <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
            <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full px-2 py-2 max-sm:py-0 gap-2! max-sm:gap-0! sm:gap-0'>
              {
                productData.image.map((item, index) => (
                  <div key={index} className='scale-up w-[24%] sm:w-full flex-shrink-0 cursor-pointer'>
                    <img onClick={() => setImage(item)} src={item} alt={`Product Image ${index + 1}`} className='border active:border-2 hover:border-blue-500 rounded-xl sm:w-full flex-shrink-0 cursor-pointer' />
                  </div>
                ))
              }
            </div>
            <div className='w-full sm:w-[80%] border rounded-xl mt-2 relative overflow-hidden'>
              <img 
                ref={imageRef}
                src={image} 
                alt={`Product Image Main`} 
                className={`w-full h-auto  rounded-xl cursor-zoom-in transition-transform duration-200 ${
                  isZoomed ? 'scale-150' : ''
                }`}
                style={{
                  transformOrigin: isZoomed ? `${mousePosition.x}% ${mousePosition.y}%` : 'center center'
                }}
                onClick={() => setIsZoomed(!isZoomed)}
                onMouseMove={isZoomed ? handleMouseMove : undefined}
                onMouseLeave={() => setIsZoomed(false)}
              />
            </div>
          </div>

          {/*Product Info*/}
          <div className='flex-1'>
            <h1 className='text-2xl font-medium'>{productData.name}</h1>
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

        <div className='mt-10 pb-12 max-sm:pb-6 border-b-1'>
          <div className='flex'>
            <b className='border px-5 py-3 text-sm'>Description</b>
            <p className='border px-5 py-3 text-sm'>Seller reviews(122) </p>
          </div>
          <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
            <p>A soft and stylish pink t-shirt made from breathable cotton fabric, perfect for everyday wear. Designed with a classic crew neckline and short sleeves.</p>
            <p>The vibrant pink shade adds a pop of color to your wardrobe, making it suitable for both casual outings and laid-back lounging. Durable, lightweight, and easy to care for—this pink tee is a versatile essential you’ll reach for again and again.</p>
          </div>
        </div>

        {/*Display related products section*/}

        <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

      </div>
    </>
  ) : <div className='opacity-0'></div>
  
}

export default Product