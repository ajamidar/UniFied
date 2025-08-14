import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import LatestCollection from '../components/LatestCollection';
import GradientText from '../components/GradientText';
import { ShopContext } from '../context/ShopContext';

const UniHome = () => {
    const {selectedUni} = useParams();
    const { products } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);

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
    
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10'>

      {/*Filter Section*/}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTER</p>
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' value={'Men'}/>Men
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' value={'Women'}/>Women
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' value={'Unisex'}/>Unisex
            </p>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default UniHome