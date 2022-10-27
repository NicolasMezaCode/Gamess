import React from 'react'
import {FiSearch} from 'react-icons/fi'
import './Searchbar.styles.scss';


export default function Searchbar() {
  return (
    <div className='flex relative '>
        <input className='w-96 rounded-md my-3' type="text" placeholder='Search your game here' />
        <figure><h3 className='absolute my-4'><FiSearch/></h3></figure>
    </div>
  )
}