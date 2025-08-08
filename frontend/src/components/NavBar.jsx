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
            <div className='flex flex-row justify-center items-center'>
              <NavLink to='/'>
              <img src={assets.logo} width={90} height={100}></img>
              </NavLink>
            </div>
            <div className='location'>
              <div className='location-text'>
                <p>Select your University</p>
              </div>
              <div className='location-dropdown'>
                <select name="location" id="location" aria-placeholder='Select Location'>
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