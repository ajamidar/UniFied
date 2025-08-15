import React from 'react'
import LandingPictures from '../components/LandingPictures'
import SmallLandingPictures from '../components/SmallLandingPictures'
import LatestCollection from '../components/LatestCollection'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'
import RollingGallery from '../components/RollingGallery'

const Home = () => {
  return (
    <>
    <div className='scale-up'><LandingPictures /></div>
    <div><SmallLandingPictures /></div>
    <div className='mt-10 max-sm:mt-0'><OurPolicy /></div>
    <hr className='mt-10 max-sm:mt-5'/>
    <div className='mt-10 max-sm:mt-5'>
      <div className='flex flex-row justify-center items-center'>
        <h1 className='text-5xl max-sm:text-3xl font-bold text-center  mb-10'>Shop</h1>
        <h1 className='text-5xl max-sm:text-3xl font-bold text-center text-[#ff25c5] mb-10'>&nbsp;Preloved&nbsp;</h1>
        <h1 className='text-5xl max-sm:text-3xl font-bold text-center  mb-10'>Products</h1>
      </div>
      <div className='flex justify-center items-center'>
        <RollingGallery autoplay={true} pauseOnHover={true} />
      </div>
    </div>
    <hr className='mt-15 max-sm:mt-10'/>
    <div className='mt-15 max-sm:mt-5'><NewsLetterBox /></div>
    </>
    
  )
}

export default Home