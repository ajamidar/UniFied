import React, { useState } from 'react'
import {assets} from '../assets/frontend_assets/assets'
import { NavLink } from 'react-router-dom'
import { tempUniData } from '../assets/constants'

const NavBar = () => {
  const [selectedUni, setSelectedUni] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const resetSelectedUni = () => {
    setSelectedUni('');
  };

  const handleSearch = () => {
    alert(searchValue); // Or use the value however you want
  };

  const num=0; // Placeholder for cart item count, replace with actual logic

  //console.log("Selected University:", selectedUni);

  return (
    <>
        <div className='navbar-box'>
            <div className='scale-up flex flex-row justify-center items-center sm:hidden md:hidden max-sm:hidden lg:flex ml-2'>
              <NavLink to='/'>
                <img src={assets.logo} width={90} height={100}></img>
              </NavLink>
            </div>
            <div className='scale-up border-3 border-[#4242422f] flex flex-col gap-1 items-center justify-center px-2 py-1.5 rounded-lg bg-gradient-to-b from-[#ffffffd1] to-[#c3eaffc4]
                            max-sm:px-4 max-sm:py-0.5  max-sm:order-3 max-sm:gap-0 max-sm:hidden'>
              <div className='font-bold text-[1.05rem] flex flex-row gap-0.5 items-center justify-center'>
                <p className='max-sm:text-[0.7rem]'>Your University</p>
                <img src='/location.svg' width={15} height={15} className='size-[15px] max-sm:size-[10px]'></img>
              </div>
              <div className='location-dropdown border-1 border-[#333333] rounded-2xl mb-1 text-[0.85rem] max-sm:text-[0.5rem] text-[#333333] px-2'>
                <select name="location" id="location" value={selectedUni} onChange={e => setSelectedUni(e.target.value)} className='cursor-pointer'>
                    <option value="" disabled>
                      Choose one...
                    </option>
                    {tempUniData.map((uni, index) => (
                      <option key={index} value={uni?.uniName}>{uni?.uniName}</option>
                    ))} 
                </select>
              </div>
              { selectedUni != '' &&
              <NavLink to={`/${selectedUni}`}>
                    <button onClick={resetSelectedUni} className={`px-2.5 py-2 text-[0.8rem] text-white font-bold  rounded-4xl bg-[#0077ff] cursor-pointer transition`}>Your Uni's Products...</button>
              </NavLink>
              }
            </div>
            <div className='searchbar w-3/8 flex flex-row items-center justify-between  rounded-lg 
                            max-sm:w-full  max-sm:order-2'>
              <input type='text' placeholder='Search...' value={searchValue} onChange={e => setSearchValue(e.target.value)} className='w-full h-1/4 pl-3 py-3 rounded-tl-lg rounded-bl-lg bg-[#f0f0f0] border border-[#ccc] max-sm:text-[0.7rem]' />
              <NavLink to="/collection">
                <button type='button' onClick={handleSearch} className=' px-4 py-2.5 rounded-tr-lg cursor-pointer rounded-br-lg bg-[#ffaa01] text-white hover:bg-[#ed9a26] transition '>
                  <img src='/search.svg' width={30} height={30} alt='Search' className='max-sm:size-[17.5px]'/>
                </button>
              </NavLink>
            </div>
            <div className='flex flex-row items-center justify-center gap-15 
                            max-sm:gap-5 max-sm:order-1'>
              <div className='scale-up flex flex-row justify-center items-center min-sm:hidden ml-1 max-sm:order-1'>
                <NavLink to='/'>
                  <img src={assets.logo} width={90} height={100} className='size-[50px]'></img>
                </NavLink>
              </div>
              <div className='flex flex-row items-center justify-center gap-15 max-sm:flex-col max-sm:gap-0 max-sm:order-3'>
                <div className='sign-in/account order-2 max-sm:order-2 '>
                  <NavLink to='/login'>
                    <button className='px-4 py-2.5 text-[1.1rem] rounded-lg bg-[#21d942] text-white font-bold hover:bg-[#00b50c] border-2 border-[#1a65011c] transition cursor-pointer
                                      max-sm:text-[0.4rem] max-sm:px-1 max-sm:py-1.5 max-sm:font-medium'>
                      Sign In / Sign Up
                    </button>
                  </NavLink>
                </div>
                <div className='cart scale-up order-2 max-sm:order-1'>
                  <NavLink to='/cart' className='flex flex-col items-center justify-center'>
                    <div className='flex flex-row items-center justify-center gap-1 max-sm:gap-0'>                  
                      <img src='/cart.svg' width={45} height={45} alt='Basket' className='max-sm:size-[20px]'/>
                      <p className='text-[1.2rem] font-bold pt-3 max-sm:text-[0.55rem] max-sm:pb-0.5 pr-1'>Cart ({num})</p>  
                    </div>
                    <hr className='w-4/4 border-none h-[1.5px] bg-gray-700 hidden'/>
                  </NavLink>
                </div>
              </div>
              <div className='scale-up border-3 border-[#4242422f] flex flex-col gap-1 items-center justify-center px-2 py-1.5 rounded-lg bg-gradient-to-b from-[#ffffffd1] to-[#c3eaffc4]
                            max-sm:px-2 max-sm:py-1.5  max-sm:order-2 max-sm:gap-1 min-sm:hidden'>
                <div className='font-bold text-[1.05rem] max-sm:order-1 flex flex-row gap-0.5 items-center justify-center'>
                  <p className='max-sm:text-[0.6rem]'>Your University</p>
                  <img src='/location.svg' width={15} height={15} className='size-[15px] max-sm:size-[10px]'></img>
                </div>
                <div className='location-dropdown max-sm:order-2 border-1 border-[#333333] rounded-2xl text-[0.85rem] max-sm:text-[0.45rem] text-[#333333] px-2'>
                  <select name="location" id="location" value={selectedUni} onChange={e => setSelectedUni(e.target.value)} className='cursor-pointer'>
                      <option value="" disabled>
                        Choose one...
                      </option>
                      {tempUniData.map((uni, index) => (
                        <option key={index} value={uni?.uniName}>{uni?.uniName}</option>
                      ))} 
                  </select>
                </div>
                <div className='max-sm:order-3'>
                { selectedUni != '' &&
                  <NavLink to={`/${selectedUni}`}>
                        <button onClick={resetSelectedUni} className={`px-2.5 py-1 text-[0.5rem] text-white font-bold  rounded-4xl bg-[#0077ff] cursor-pointer transition`}>Your Uni's Products...</button>
                  </NavLink>
                  }
                </div>
              </div>
            </div>
        </div>
    </>

  )
}

export default NavBar