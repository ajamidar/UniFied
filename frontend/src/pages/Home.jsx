import React from 'react'
import LandingPictures from '../components/LandingPictures'
import SmallLandingPictures from '../components/SmallLandingPictures'
import LatestCollection from '../components/LatestCollection'
import OurPolicy from '../components/OurPolicy'

const Home = () => {
  return (
    <>
    <div><LandingPictures /></div>
    <div><SmallLandingPictures /></div>
    {/*<div><LatestCollection /></div>*/}
    <div><OurPolicy /></div>
    </>
    
  )
}

export default Home