// components/Slideshow.tsx
'use client'

import React, { useEffect, useState } from 'react'

const images = [
  '/landing1.jpg',
  '/landing2.jpg',
  '/landing3.jpg'
]

const LandingPictures = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='flex justify-center items-center'>
      <div className="relative w-12/12 h-[550px] max-w-full max-h-full rounded-4xl overflow-hidden shadow-lg mt-4 mb-2 bg-gradient-to-b from-[#5c5e5f2f] to-[#bab8b375] max-sm:hidden ">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover p-2 rounded-4xl transition-opacity duration-1000 ${
              index === current ? 'opacity-100 z-0' : 'opacity-0 z-0'
            }`}
          />
        ))}
        <div className="absolute top-0 left-0 h-full w-2/3 flex items-center justify-start pl-10 z-10">
          <h1 className="text-[#ffffff] text-5xl font-bold text-left" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}>
            UK's 1<sup className="text-xl align-super">st</sup> UNIVERSITY MARKETPLACE
          </h1>
        </div>
      </div>
    </div>
  )
}

export default LandingPictures