import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // Handle the subscription logic here, e.g., send email to backend
        alert('Subscription successful!'); // Placeholder for actual logic
    }


  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800 max-sm:text-[1.2rem]'>Subscribe now and get 20% off</p>
        <p className='text-gray-400 mt-2 max-sm:text-[0.7rem]'>Get latest updates about new listings, price-drops, coupon code straight to your inbox.</p>
        <form onSubmit={onSubmitHandler} className='w-3/4 min-sm:w-3/5 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input type='email' placeholder='Enter your email' className='w-3/4 sm:flex-1 outline-none max-sm:text-[0.6rem]'  required/>
            <button type='submit' className='bg-[#00b3ff] font-medium text-white px-4 py-2 sm:ml-2 max-sm:text-[0.65rem]'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetterBox