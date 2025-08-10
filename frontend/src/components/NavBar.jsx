import React, { useState } from 'react'
import {assets} from '../assets/frontend_assets/assets'
import { NavLink } from 'react-router-dom'
import { tempUniData } from '../assets/constants'

const NavBar = () => {
  const [selectedUni, setSelectedUni] = useState('');

  return (
    <>
        <div className='navbar-box'>
            <div className='scale-up flex flex-row justify-center items-center'>
              <NavLink to='/'>
                <img src={assets.logo} width={90} height={100}></img>
              </NavLink>
            </div>
            <div className='scale-up border-2 border-[#42424211] flex flex-col gap-1 items-center justify-center px-3 py-2 rounded-lg bg-gradient-to-b from-[#0073ff0f] to-[#0194fd4b]'>
              <div className='font-bold text-[1.1rem] flex flex-row gap-1 items-center'>
                <p>Your University</p>
                <img src='/location.svg' width={15} height={15} className='pb-0.5'></img>
              </div>
              <div className='location-dropdown border-1 border-[#333333] rounded-2xl mb-1 text-[0.9rem] text-[#333333] px-2'>
                <select name="location" id="location" value={selectedUni} onChange={e => setSelectedUni(e.target.value)} className='cursor-pointer'>
                  <option value="" disabled>
                    Choose one...
                  </option>
                  {tempUniData.map((uni, index) => (
                    <option key={index} value={uni?.uniName}>{uni?.uniName}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className='searchbar w-3/8 flex flex-row items-center justify-between  rounded-lg '>
              <input type='text' placeholder='Search...' className='w-full h-full pl-3 py-2 rounded-tl-lg rounded-bl-lg bg-[#f0f0f0] border border-[#ccc]' />
              <button type='button' className=' px-4 py-1.5 rounded-tr-lg rounded-br-lg bg-blue-500 text-white hover:bg-blue-600 transition'>
                Search
              </button>
            </div>
            <div className='sign-in/account'>
            
            </div>
            <div className='basket'>
              
            </div>
        </div>
    </>

  )
}

export default NavBar