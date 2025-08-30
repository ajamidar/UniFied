import React, { use, useContext, useState } from 'react'
import {assets} from '../assets/frontend_assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { tempUniData } from '../assets/constants'
import SearchBar from './SearchBar'
import { ShopContext } from '../context/ShopContextContext'
import { toast } from 'react-toastify'

const NavBar = () => {
  const [selectedUni, setSelectedUni] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const getCartCount = useContext(ShopContext)?.getCartCount;
  const navigate = useNavigate();

  const handleCartHit = () =>{
    if (selectedUni === ''){
      toast.error("Please select a university");
    }
    else{
      navigate(`${selectedUni}/cart`);
    }
  }


  return (
    <>
        <div className='navbar-box sm:gap-15! md:gap-15! lg:gap-15! xl:gap-15! 2xl:gap-15!'>
            <div className='scale-up flex flex-row justify-center items-center sm:hidden md:hidden max-sm:hidden lg:flex ml-3'>
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
                    <button className={`px-2.5 py-2 text-[0.8rem] text-white font-bold  rounded-4xl bg-[#0077ff] cursor-pointer transition`}>Your Uni's Products...</button>
              </NavLink>
              }
            </div>
            <SearchBar />
            {/*}
            <div className='searchbar w-3/8 flex flex-row items-center justify-between  rounded-lg 
                            max-sm:w-full  max-sm:order-2'>
              <input type='text' placeholder='Search...' value={searchValue} onChange={e => setSearchValue(e.target.value)} className='w-full h-1/4 pl-3 py-3 rounded-tl-lg rounded-bl-lg bg-[#f0f0f0] border border-[#ccc] max-sm:text-[0.7rem]' />
              <NavLink to="/collection">
                <button type='button' onClick={handleSearch} className=' px-4 py-2.5 rounded-tr-lg cursor-pointer rounded-br-lg bg-[#ffaa01] text-white hover:bg-[#ed9a26] transition '>
                  <img src='/search.svg' width={30} height={30} alt='Search' className='max-sm:size-[17.5px] md:size-[24px]'/>
                </button>
              </NavLink>
            </div>
            */}
            <div className='flex flex-row items-center justify-center sm:gap-15! md:gap-15! lg:gap-15! xl:gap-15! 2xl:gap-15! 
                            max-sm:gap-8 max-sm:order-1'>

              <div className='scale-up flex flex-row justify-center items-center min-sm:hidden  max-sm:order-1 '>
                <NavLink to='/'>
                  <img src={assets.logo} width={90} height={100} className='size-[50px]'></img>
                </NavLink>
              </div>

              <div className='flex flex-row items-center justify-center max-sm:flex-col max-sm:gap-0 max-sm:order-3 gap-15'>
                <div className='sign-in/account order-2 max-sm:order-2 max-sm:pb-0.5'>
                  <NavLink to='/login'>
                    <button className='text-[1rem] sm:text-[0.42rem]! md:text-[1rem]! lg:text-[0.9rem]! xl:text-[1rem]! 2xl:text-[1.1rem]!
                     rounded-lg bg-[#215bd9] text-white font-bold hover:bg-[#0024b5] border-2 border-[#1a65011c] transition cursor-pointer
                                      max-sm:font-bold max-sm:text-[0.5rem]! lg:font-medium! xl:font-extrabold! 2xl:font-extrabold!
                                      max-sm:px-1! sm:px-1! md:px-1! lg:px-2! xl:px-2! 2xl:px-4!
                                      max-sm:py-0.5! sm:py-1! md:py-1! lg:py-1! xl:py-2! 2xl:py-2!'>
                      Sign In / Register
                    </button>
                  </NavLink>
                </div>
                <div onClick={handleCartHit} className='cart scale-up order-2 max-sm:order-1 max-sm:mt-1 cursor-pointer'>
                  <div className='flex flex-col items-center justify-center md:pr-2'>
                    <div className='flex flex-row items-center justify-center gap-1 max-sm:gap-0'>                  
                      <img src='/cart.svg' width={45} height={45} alt='Basket' className='max-sm:size-[20px] md:size-[45px]'/>
                      <p className='text-[1.2rem] font-bold pt-3 max-sm:text-[0.55rem] md:text-[1rem] max-sm:pb-0.5 pr-2'>Cart ({getCartCount()})</p>  
                    </div>
                  </div>
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
                        <button className={`px-2.5 py-1 text-[0.5rem] text-white font-bold  rounded-4xl bg-[#0077ff] cursor-pointer transition`}>Your Uni's Products...</button>
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