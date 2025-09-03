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
      <div className='w-2/5'>
        <input 
          type={showPassword ? 'text' : 'password'} 
          className='w-full px-3 py-2 border border-gray-800' 
          placeholder='Password' required
        />
        <div className="flex items-center mt-1">
          <input
            id="show-password"
            type="checkbox"
            className="mr-2 mt-0.5 cursor-pointer"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <label htmlFor="show-password" className="text-md cursor-pointer">
            Show password
          </label>
        </div>
      </div>
    </form>
  )
}

export default Login