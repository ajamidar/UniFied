import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContextContext'

const PlaceOrder = () => {
  const [phone, setPhone] = useState('')
  const collectionPoint = 'University Hub';
  const [method, setMethod] = useState('stripe')

  const { navigate } = useContext(ShopContext)

  return (
    <div className='flex flex-row max-sm:flex-col justify-between gap-4 pl-5 max-sm:pl-1 pt-2.5 max-sm:pt-1 min-h-[55vh]'>

      {/**--------------Left Side--------------**/}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

        <div className='text-2xl mt-4'>
          <Title text1={'COLLECTION'} text2={'INFO'} />
        </div>

        <div className='flex gap-3'>
          <input type='text' placeholder='First Name' className='border rounded-sm w-full px-2 py-1' />
          <input type='text' placeholder='Last Name' className='border rounded-sm w-full px-2 py-1' />
        </div>

        <input type='email' placeholder='Email' className='border rounded-sm w-full px-2 py-1' />

        {/* Phone number with country code selector */}
        <div className='w-full'>
          <PhoneInput
            country={'gb'}
            value={phone}
            onChange={setPhone}
            inputClass='border !border-black'
            containerClass='phone-input-container'
            buttonClass='phone-input-dropdown !border-black'
            enableSearch={true}
            placeholder="Phone Number"
          />
        </div>
        
        <p className='text-xl w-full py-1'>Collection Point:&nbsp;
          <span className='font-semibold'>{collectionPoint}</span>
        </p>
        
      </div>

      {/**--------------Right Side--------------**/}
      <div className='mt-2 max-sm:mt-0 max-w-[480px] mr-5 max-sm:mr-0'>

        <div className='mt-4 min-w-80'>
          <CartTotal />
        </div>

        <div className='mt-10'>
          <div className='text-2xl mb-1'>
            <Title text1={'PAYMENT'} text2={'METHODS'} />
          </div>

          {/*---------Payment Methods---------*/}

          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3 h-3 border rounded-full ${method === 'stripe' ? 'bg-blue-700' : 'bg-transparent'}`}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
            </div>
            <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3 h-3 border rounded-full ${method === 'razorpay' ? 'bg-blue-700' : 'bg-transparent'}`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
            </div>
          </div>
        </div>

        <div className='w-full text-end mt-6'>
          <button onClick={() => navigate('/orders')} className='bg-[#0077ff] w-full rounded-2xl text-white sm:text-sm max-sm:text-sm px-1.5 py-1.5 font-bold hover:bg-blue-700 cursor-pointer'>PLACE ORDER</button>
        </div>

      </div>

    </div>
  )
}

export default PlaceOrder