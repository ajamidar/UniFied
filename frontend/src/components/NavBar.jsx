import React from 'react'
import {assets} from '../assets/frontend_assets/assets'

const NavBar = () => {
  return (
    <>
        <div className='navbar-box'>
            <div>
                <img src={assets.logo} width={90} height={100}></img>
                <p className='text-black'>hello</p>
            </div>
        </div>
    </>

  )
}

export default NavBar