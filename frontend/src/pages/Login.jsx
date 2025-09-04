import { div } from 'motion/react-client';
import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up') // 'Login' or 'Sign Up';
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='flex justify-center items-center w-full'>
      <div className='bg-[#e7e7e7] py-10 mt-5 rounded-lg shadow-lg'>
        <form className='flex flex-col items-center border w-[50%] max-sm:max-w-96 m-auto gap-4 text-gray-800'>
          <div className='inline-flex items-center gap-4 mb-2'>
            <p className='prata-regular text-3xl'>{currentState}</p>
            <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
          </div>
          {currentState === 'Login' ? '' : 
          <input type='text' className='w-2/5 px-3 py-2 border border-gray-800' placeholder='Full Name' required />
          }
          <input type='email' className='w-2/5 px-3 py-2 border border-gray-800' placeholder='Email Address' required />

          {/* Password input with checkbox toggle */}
          <div className='flex flex-col items-center gap-3 w-full'>

            <div className='w-2/5 flex flex-row'>
              <input 
                type={showPassword ? 'text' : 'password'} 
                className='px-3 py-2 border border-gray-800 w-19/20' 
                placeholder='Password' required
              />
              <div className="flex items-center justify-center w-1/20 bg-[#e2e0e0] hover:bg-[#b4b4b4] cursor-pointer">
                <div className='flex justify-center items-center border-r border-r-gray-800 border-t border-t-gray-800 border-b border-b-gray-800 h-full'>
                  <img
                  src='/eye-icon.svg'
                  alt="Toggle password visibility"
                  className=" cursor-pointer size-[70%]"
                  onClick={() => setShowPassword(!showPassword)}
                  />
                </div>        
              </div>
            </div>

            <div className='flex items-center w-2/5 pl-2 justify-start text-sm mt-[-8px]'>
              <p className='cursor-pointer'>Forgot Your Password?</p>
            </div>

        

          </div>
          
          
        </form>
      </div>
    </div>
  )
}

export default Login