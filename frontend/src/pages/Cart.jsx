import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContextContext';
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';
import CartTotal from '../components/CartTotal';
import { NavLink, useParams } from 'react-router-dom';

const Cart = () => {

  const { selectedUni } = useParams();

  const { products, currency, cartItems, updateQuantity } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(()=>{

    const tempData = [];
    for(const items in cartItems){
      for(const item in cartItems[items]){
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData);

  }, [cartItems]);

  return (
    <div className='pt-2'>

      <div className='flex'>
        <NavLink to={`/${selectedUni}`} className='text-blue-700 hover:underline w-full'>
          <button className='bg-[#0077ff] w-full rounded-2xl text-white sm:text-sm max-sm:text-sm px-1.5 py-1.5 font-bold hover:bg-blue-700 cursor-pointer'>Return to {selectedUni}'s Home</button>
        </NavLink>
      </div>
      <hr className='my-2' />

      <div className='text-2xl mb-3 mt-4'>
        <Title text1 ={'YOUR'} text2={'CART'} />
      </div>

      <div>
        {
          cartData.map((item, index) => {

            const productData = products.find((product)=> product._id === item._id);

            return (
              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6 sm:gap-10'>
                  <img src={productData.image[0]} alt="product image" className='w-16 sm:w-20'/>
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-2.5 mt-2'>
                      <p>{currency}{productData.price}</p>
                      <p className='px-1 scale-up sm:px-2.5 sm:py-0.5 text-sm border bg-[#98cfff] hover:bg-[#70bcff] rounded-2xl'>{item.size}</p>
                    </div>
                  </div>
                </div>
                <div className='flex flex-row items-center gap-2 max-sm:gap-1 max-sm:flex-col'>
                  <p className='text-black font-medium max-sm:text-xs'>Quantity:</p>
                  <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} type='number' min={1} defaultValue={item.quantity} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' />
                </div>
                
                <div className='flex flex-col items-center justify-center'>
                  <p className='text-black font-medium text-xs max-sm:text-xs order-2'>Delete item</p>
                  <img onClick={()=>updateQuantity(item._id, item.size, 0)} src={assets.bin_icon} alt='' className='order-1 w-6 py-2 px-1 rounded-xl sm:w-6 scale-up hover:bg-[#dddddd] cursor-pointer' />
                </div>
                
              </div>
            )

          })
        }
      </div>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
        </div>
      </div>
      
    </div>
  )

}

export default Cart