import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import LatestCollection from '../components/LatestCollection';
import GradientText from '../components/GradientText';
import { ShopContext } from '../context/ShopContext';

const UniHome = () => {
    const {selectedUni} = useParams();
    const { products } = useContext(ShopContext);

  return (
    <>
    <div className='flex justify-center items-center mt-10 max-sm:mt-5'>
      <GradientText
        colors={["#333333", "#4079ff", "#000000", "#4079ff", "#333333"]}
        animationSpeed={5}
        showBorder={false}
        className="custom-class max-sm:text-3xl max-sm:pl-5 px-4 text-4xl md:text-4xl font-bold!">
        {selectedUni}'s Collection
      </GradientText>
    </div>

    <div className='flex justify-center items-center mt-7'>
      <hr className='bg-[#333333] h-0.5 w-6/7' />
    </div>
    
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

    </div>
    </>
  )
}

export default UniHome