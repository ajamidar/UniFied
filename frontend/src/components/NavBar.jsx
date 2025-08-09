import React from 'react'
import {assets} from '../assets/frontend_assets/assets'
import { NavLink } from 'react-router-dom'
import { tempUniData } from '../assets/constants'

const NavBar = () => {

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
                <select name="location" id="location" defaultValue='' className='cursor-pointer'>
                  <option value="" disabled>
                    Choose one...
                  </option>
                  {tempUniData.map((uni, index) => (
                    <option key={index} value={uni?.uniName}>{uni?.uniName}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className='searchbar'>

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