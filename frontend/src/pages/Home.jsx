import React from 'react'
import LandingPictures from '../components/LandingPictures'
import SmallLandingPictures from '../components/SmallLandingPictures'
import LatestCollection from '../components/LatestCollection'

const Home = () => {
  return (
    <>
    <div><LandingPictures /></div>
    <div><SmallLandingPictures /></div>
    <div><LatestCollection /></div>
    </>
    
  )
}

export default Home