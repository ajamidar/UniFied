import React from 'react'
import {assets} from '../assets/frontend_assets/assets'

const NavBar = () => {
  return (
    <>
        <div className='navbar-box'>
            <div className='flex flex-row justify-center items-center'>
                <img src={assets.logo} width={90} height={100}></img>
            </div>
            <div className='location'>

            </div>
            
        </div>
    </>

  )
}

export default NavBar