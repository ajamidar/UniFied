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
    <div><OurPolicy /></div>
    <div className='mt-20 max-sm:mt-5'><NewsLetterBox /></div>
    </>
    
  )
}

export default Home