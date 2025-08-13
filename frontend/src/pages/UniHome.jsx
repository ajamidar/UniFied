import React from 'react'
import { useParams } from 'react-router-dom'
import LatestCollection from '../components/LatestCollection';

const UniHome = () => {
    const {selectedUni} = useParams();

  return (
    <>
    <div className='flex justify-center items-center mt-10'>
      <p className='font-extrabold text-4xl'>{selectedUni}'s Home Page</p>
    </div>
    
    <LatestCollection />
    </>
  )
}

export default UniHome