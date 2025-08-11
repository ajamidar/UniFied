import React from 'react'
import { useParams } from 'react-router-dom'
import LatestCollection from '../components/LatestCollection';

const UniHome = () => {
    const {selectedUni} = useParams();

  return (
    <>
    <h1 className='font-extrabold'>{selectedUni}'s Home Page</h1>
    <LatestCollection />
    </>
  )
}

export default UniHome