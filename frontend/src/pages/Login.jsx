import React, { useState, useEffect } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up') // 'Login' or 'Sign Up';
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [validations, setValidations] = useState({
    length: false,
    cases: false,
    special: false,
    number: false
  });
  // Add a state to track if password field was focused
  const [passwordTouched, setPasswordTouched] = useState(false);

  // Check password strength as user types
  useEffect(() => {
    if (currentState === 'Sign Up') {
      setValidations({
        length: password.length >= 6,
        cases: /^(?=.*[a-z])(?=.*[A-Z])/.test(password),
        special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
        number: /\d/.test(password)
      });
    }
  }, [password, currentState]);

  return (
    <div className='flex justify-center items-center w-full'>
      <div className='py-10 mt-5'>
        <form className='flex flex-col rounded-lg shadow-lg bg-[#009dff2c] items-center border w-[70%] max-sm:max-w-96 m-auto p-10 gap-4 text-gray-800'>
          <div className='inline-flex items-center gap-4 mb-2'>
            <p className='prata-regular text-3xl'>{currentState}</p>
            <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
          </div>
          {currentState === 'Login' ? '' : 
          <input type='text' className='w-2/5 px-3 bg-white py-2 border border-gray-800' placeholder='Full Name' required />
          }
          <input type='email' className='w-2/5 px-3 bg-white py-2 border border-gray-800' placeholder='Email Address' required />

          {/* Password input with live validation */}
          <div className='flex flex-col items-center gap-3 w-full'>
            <div className='w-2/5 flex flex-row'>
              <input 
                type={showPassword ? 'text' : 'password'} 
                className='px-3 py-2 bg-white border border-gray-800 w-20/21' 
                placeholder='Password' 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPasswordTouched(true)}
              />
              <div className="flex items-center justify-center w-2/22 bg-[#e2e0e0] hover:bg-[#b4b4b4] cursor-pointer">
                <div className='flex justify-center items-center border-r border-r-gray-800 border-t border-t-gray-800 border-b border-b-gray-800 h-full'>
                  <img
                    src='/eye-icon.svg'
                    alt="Toggle password visibility"
                    className="cursor-pointer size-[70%]"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </div>        
              </div>
            </div>

            {/* Password validation indicators - only show in Sign Up mode AND after password field is touched */}
            {currentState === 'Sign Up' && passwordTouched && (
              <div className='w-2/5 flex flex-col gap-1 mt-1'>
                <p className={`text-xs ${validations.length ? 'text-green-600' : 'text-red-500'}`}>
                  {validations.length ? '✓' : '✗'} At least 6 characters
                </p>
                <p className={`text-xs ${validations.cases ? 'text-green-600' : 'text-red-500'}`}>
                  {validations.cases ? '✓' : '✗'} At least one uppercase and lowercase letter
                </p>
                <p className={`text-xs ${validations.special ? 'text-green-600' : 'text-red-500'}`}>
                  {validations.special ? '✓' : '✗'} At least one special character, Eg: !, @, $, %, ^, &, *
                </p>
                <p className={`text-xs ${validations.number ? 'text-green-600' : 'text-red-500'}`}>
                  {validations.number ? '✓' : '✗'} At least one number
                </p>
              </div>
            )}

            {currentState === 'Login' ?
              <div className='flex items-center w-2/5 pl-2 justify-start text-sm mt-[-8px]'>
                <p className='cursor-pointer scale-up text-[#ff0000] hover:text-[#d20000]'>Forgot Your Password?</p>
              </div> : ''
            }

            <div className='w-2/5 flex justify-center items-center mt-2'>
              <button 
                type='submit' 
                className='w-3/5 rounded-2xl bg-[#0073ff] text-white py-2 hover:bg-[#005bb5] cursor-pointer'
                disabled={currentState === 'Sign Up' && (!validations.length || !validations.cases || !validations.special || !validations.number)}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login