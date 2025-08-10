import React, { useState } from 'react'
import {assets} from '../assets/frontend_assets/assets'
import { NavLink } from 'react-router-dom'
import { tempUniData } from '../assets/constants'

const NavBar = () => {
  const [selectedUni, setSelectedUni] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    alert(searchValue); // Or use the value however you want
  };

  const num=0; // Placeholder for cart item count, replace with actual logic

  return (
    <>
        <div className='navbar-box'>
            <div className='scale-up flex flex-row justify-center items-center sm:hidden md:hidden lg:flex ml-1'>
              <NavLink to='/'>
                <img src={assets.logo} width={90} height={100}></img>
              </NavLink>
            </div>
            <div className='scale-up border-3 border-[#4242422f] flex flex-col gap-1 items-center justify-center px-2 py-1.5 rounded-lg bg-gradient-to-b from-[#ffffffd1] to-[#c3eaffc4]'>
              <div className='font-bold text-[1.05rem] flex flex-row gap-0.5 items-center justify-center'>
                <p>Your University</p>
                <img src='/location.svg' width={15} height={15} className=''></img>
              </div>
              <div className='location-dropdown border-1 border-[#333333] rounded-2xl mb-1 text-[0.85rem] text-[#333333] px-2'>
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
              <input type='text' placeholder='Search...' value={searchValue} onChange={e => setSearchValue(e.target.value)} className='w-full h-full pl-3 py-3 rounded-tl-lg rounded-bl-lg bg-[#f0f0f0] border border-[#ccc]' />
              <button type='button' onClick={handleSearch} className=' px-4 py-2.5 rounded-tr-lg rounded-br-lg bg-[#ffaa01] text-white hover:bg-[#ed9a26] transition '>
                <img src='/search.svg' width={27} height={27} alt='Search' />
              </button>
            </div>
            <div className='sign-in/account'>
              <NavLink to='/login'>
                <button className='px-4 py-2.5 rounded-lg bg-[#21d942] text-white font-bold hover:bg-[#00b50c] border-2 border-[#1a65011c] transition'>
                  Sign In / Sign Up
                </button>
              </NavLink>
            </div>
            <div className='cart'>
              <NavLink to='/basket' className='flex flex-row items-center justify-center gap-2'>                  
                  <img src='/cart.svg' width={45} height={45} alt='Basket' />
                  <p className='text-[1.25rem] font-bold pt-3'>Cart ({num})</p>  
              </NavLink>
            </div>
        </div>
    </>

  )
}

export default NavBar