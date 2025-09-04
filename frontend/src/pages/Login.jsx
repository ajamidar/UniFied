import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className='flex flex-col items-center w-[90%] max-sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-4 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === 'Login' ? '' : 
      <input type='text' className='w-2/5 px-3 py-2 border border-gray-800' placeholder='Full Name' required />
      }
      <input type='email' className='w-2/5 px-3 py-2 border border-gray-800' placeholder='Email Address' required />

      {/* Password input with checkbox toggle */}
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
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
          <p className='cursor-pointer'>Forgot Your Password?</p>
        </div>
    </form>
  )
}

export default Login