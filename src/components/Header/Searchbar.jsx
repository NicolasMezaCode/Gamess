import React from 'react'
import {FiSearch} from 'react-icons/fi'


export default function Searchbar() {
  return (
    <div className='flex relative '>
        <input className='w-96 rounded-md my-3 p-1' type="text" placeholder='Search your game here' />
        <figure><h3 className='absolute'><FiSearch/></h3></figure>
    </div>
  )
}