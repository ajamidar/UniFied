import React from 'react'
import LandingPictures from '../components/LandingPictures'
import SmallLandingPictures from '../components/SmallLandingPictures'
import LatestCollection from '../components/LatestCollection'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'

const Home = () => {
  return (
    <>
    <div><LandingPictures /></div>
    <div><SmallLandingPictures /></div>
    {/*<div><LatestCollection /></div>*/}
    <div className='mt-10 max-sm:mt-0'><OurPolicy /></div>
    <hr className='mt-10 max-sm:mt-5'/>
    <div className='mt-10 max-sm:mt-5'>
      <div className='flex justify-center items-center'>
        <h1 className='text-4xl font-bold text-center'>Latest Collection</h1>
      </div>
      <LatestCollection />
    </div>
    <hr className='mt-15 max-sm:mt-10'/>
    <div className='mt-15 max-sm:mt-5'><NewsLetterBox /></div>
    </>
    
  )
}

export default Home