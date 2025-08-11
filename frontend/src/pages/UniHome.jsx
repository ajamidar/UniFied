import React from 'react'
import { useParams } from 'react-router-dom'

const UniHome = () => {
    const {selectedUni} = useParams();

  return (
    <>
    <h1 className='font-extrabold'>{selectedUni}'s Bestsellers</h1>
    </>
  )
}

export default UniHome