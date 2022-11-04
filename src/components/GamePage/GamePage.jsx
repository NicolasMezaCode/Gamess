import React from 'react'
import GoW from '../../assets/God_of_War_II_cover.jpg'

export default function Game() {

  const background = [GoW];


  return (
    <div className='flex w-fit'>
      <div className='relative'>
        <div className='h-136 w-screen absolute'>
          <figure style={{ backgroundImage: `url(${GoW})` }} className='bg-no-repeat bg-cover bg-center blur-md min-h-full min-w-full bg-fixed'></figure>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-10 items-center text-center pt-60'>
        <img src={GoW} alt="" className='rounded-lg' />
        <div className='backdrop-blur-md bg-white/30 w-128 h-128'>
          <ul>
            <li>test </li>
            <li>test </li>
            <li>test </li>
            <li>test </li>
          </ul>
        </div>
      </div>
    </div>


  )
}
