import React from 'react'
import { useParams } from 'react-router-dom'
import LatestCollection from '../components/LatestCollection';
import GradientText from '../components/GradientText';

const UniHome = () => {
    const {selectedUni} = useParams();

  return (
    <>
    <div className='flex justify-center items-center mt-10'>
      <GradientText
        colors={["#333333", "#4079ff", "#000000", "#4079ff", "#333333"]}
        animationSpeed={5}
        showBorder={false}
        className="custom-class px-4 text-4xl font-bold!">
        {selectedUni}'s Collection
      </GradientText>
    </div>

    <div className='flex justify-center items-center mt-7'>
      <hr className='bg-[#333333] h-0.5 w-6/7' />
    </div>
    
    <LatestCollection />
    </>
  )
}

export default UniHome