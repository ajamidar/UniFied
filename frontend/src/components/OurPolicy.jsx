import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-5 text-xs sm:text-sm md:text-base text-[#333333]'>
        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="Exchange Icon" />
            <p className='font-semibold'>Exchange Policy</p>
            <p className='text-gray-400'>We offer hassle free exhange policy</p>
        </div>
        <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="Exchange Icon" />
            <p className='font-semibold'>Quicks Returns Policy</p>
            <p className='text-gray-400'>We offer free 7-day returns</p>
        </div>
        <div>
            <img src={assets.support_img} className='w-12 m-auto mb-5' alt="Exchange Icon" />
            <p className='font-semibold'>Best Customer Support</p>
            <p className='text-gray-400'>We provide 24/7 customer service</p>
        </div>
    </div>
  )
}

export default OurPolicy