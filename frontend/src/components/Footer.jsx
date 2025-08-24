import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
        <hr className='mt-30 max-sm:mt-10' />
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] ] gap-14 my-10 text-sm max-sm:gap-5'>

            <div>
                <img src={assets.logo} alt='logo' className='mb-3 w-25 max-sm:w-15' />
                <p className='w-full md:w-2/3 text-gray-600 max-sm:text-xs'>
                    We are dedicated to creating the most trusted and convenient platform for buying and selling preloved items within your university community. Our mission is to make it easy for students to find great deals and connect with others in a safe, familiar environment. Whether you’re looking to declutter, save money, we’re here to make the process smooth — all while fostering a stronger sense of community on campus
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5 max-sm:text-sm'>COMPANY</p>
                <ul className='text-gray-600 flex flex-col gap-1 max-sm:text-xs'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Collection</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5 max-sm:text-sm'>GET IN TOUCH</p>
                <ul className='text-gray-600 flex flex-col gap-1 max-sm:text-xs'>
                    <li>+44 7443735548</li>
                    <li>contact@unified.com</li>
                </ul>
            </div>

        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center max-sm:text-xs'>
                Copyright 2025 @ UniFied - All rights reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer