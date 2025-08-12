import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // Handle the subscription logic here, e.g., send email to backend
        alert('Subscription successful!'); // Placeholder for actual logic
    }


  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now and get 20% off</p>
        <p className='text-gray-400 mt-2'>Dummy text; should be something related to memberships</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input type='email' placeholder='Enter your email' className='w-full sm:flex-1 outline-none'  required/>
            <button type='submit' className='bg-[#00b3ff] font-medium text-white px-4 py-2 mt-3 sm:mt-0 sm:ml-2'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetterBox