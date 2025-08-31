import React, { useState } from 'react'
import Title from '../components/Title'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const PlaceOrder = () => {
  const [phone, setPhone] = useState('')
  const collectionPoint = 'University Hub';

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-5 min-h-[80vh]'>

      {/**--------------Left Side--------------**/}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

        <div className='text-xl sm:text-2xl mt-4'>
          <Title text1={'COLLECTION'} text2={'INFORMATION'} />
        </div>

        <div className='flex gap-3'>
          <input type='text' placeholder='First Name' className='border rounded-sm w-full px-2 py-1' />
          <input type='text' placeholder='Last Name' className='border rounded-sm w-full px-2 py-1' />
        </div>

        <input type='email' placeholder='Email' className='border rounded-sm w-full px-2 py-1' />

        {/* Phone number with country code selector */}
        <div className='w-full'>
          <PhoneInput
            country={'gb'}
            value={phone}
            onChange={setPhone}
            inputClass='border !border-black'
            containerClass='phone-input-container'
            buttonClass='phone-input-dropdown !border-black'
            enableSearch={true}
            placeholder="Phone Number"
          />
        </div>
        
        <p className='text-xl w-full py-1'>Collection Point:&nbsp;
          <span className='font-semibold'>{collectionPoint}</span>
        </p>
      </div>
    </div>
  )
}

export default PlaceOrder