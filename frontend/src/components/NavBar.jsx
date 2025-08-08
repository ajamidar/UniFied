import React from 'react'
import {assets} from '../assets/frontend_assets/assets'
import { NavLink } from 'react-router-dom'
import { tempUniData } from '../assets/constants'

const NavBar = () => {

  console.log(tempUniData);
  console.log('Hello');
  return (
    <>
        <div className='navbar-box'>
            <div className='scale-up flex flex-row justify-center items-center'>
              <NavLink to='/'>
                <img src={assets.logo} width={90} height={100}></img>
              </NavLink>
            </div>
            <div className='scale-up border-2 border-[#33333311] flex flex-col items-center justify-center px-1 py-1 rounded-lg bg-gradient-to-b from-[#0073ff20] to-[#0194fdce]'>
              <div className='font-bold text-[1.2rem]'>
                <p>Your University</p>
              </div>
              <div className='location-dropdown'>
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