import React from 'react'
import Searchbar from './Searchbar'
import logo from '../../assets/game-icons_game-console.svg'


export default function Navbar() {
  return (
    <nav className='flex p-1 bg-gray-300'>

      <div className='w-48 inline-flex gap-3 my-auto mx-3'>
        <div>
          <img classname='' src={logo} alt="Website Logo" />
        </div>
        <div>
          <h2 className='text-4xl'>Gamess</h2>
        </div>
      </div>
      
      <Searchbar />
      <div className='mt-3 mr-10 mb-3 ml-auto '>
        <button className='p-1 px-8 rounded-md bg-cyan-500 mr-3.5' >Log in</button>
        <button className='p-1 px-8 rounded-md bg-neutral-800 text-white'>Register</button>
      </div>
    </nav>
  )
}

