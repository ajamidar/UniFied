import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import SpotLightCard from './SpotLightCard'

const OurPolicy = () => {
  return (
    <div className='flex flex-row sm:flex-row justify-around gap-10 max-sm:gap-2 text-center py-5 max-sm:py-2 text-xs sm:text-sm md:text-base text-[#333333]'>
        <SpotLightCard className="custom-spotlight-card max-sm:px-2!" spotlightColor="rgba(0, 229, 255, 0.2)">
          <div>
            <img src={assets.exchange_icon} className='w-12 max-sm:w-7 m-auto mb-5 max-sm:mb-2 max-sm:size-[30px]' alt="Exchange Icon" />
            <p className='font-semibold max-sm:text-[0.7rem]'>Exchange Policy</p>
            <p className='text-[#ff6200] max-sm:text-[0.6rem]'>We offer hassle free exhange policy</p>
        </div>
        </SpotLightCard>
        <SpotLightCard className="custom-spotlight-card px-15! max-sm:px-4!" spotlightColor="rgba(0, 229, 255, 0.2)">
          <div>
              <img src={assets.quality_icon} className='w-12 max-sm:w-7 m-auto mb-5 max-sm:mb-2 max-sm:size-[30px]' alt="Exchange Icon" />
              <p className='font-semibold max-sm:text-[0.7rem]'>Quicks Returns Policy</p>
              <p className='text-[#0088ff] max-sm:text-[0.6rem]'>We offer free 7-day returns</p>
          </div>
        </SpotLightCard>
        <SpotLightCard className="custom-spotlight-card max-sm:px-2!" spotlightColor="rgba(0, 229, 255, 0.2)">
          <div>
              <img src={assets.support_img} className='w-12 max-sm:w-7 m-auto mb-5 max-sm:mb-2 max-sm:size-[30px]' alt="Exchange Icon" />
              <p className='font-semibold max-sm:text-[0.7rem]'>Best Customer Support</p>
              <p className='text-[#36bd00] max-sm:text-[0.6rem]'>We provide 24/7 customer service</p>
          </div>
        </SpotLightCard>
    </div>
  )
}

export default OurPolicy