import React from 'react'
import {FiSearch} from 'react-icons/fi'
import './Searchbar.styles.scss';


export default function Searchbar() {
  return (
    <div className='searchbar'>
        <input className='searchbar__input' type="text" placeholder='Search your game here' />
        <figure><h3 className='searchbar__figure'><FiSearch/></h3></figure>
    </div>
  )
}