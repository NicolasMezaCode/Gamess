import React from 'react'
import Searchbarmenu from './Searchbar'
import logo from '../../../public/game-icons_game-console.svg'


export default function Navbar() {
  return (
    <nav className='flex p-1 bg-gray-300'>

      <div className='w-48 inline-flex my-auto mx-3'>
        <div>
          <img className='' src={logo} alt="Website Logo" />
        </div>
        <div>
          <h2 className='text-4xl font-poppins'>Gamess</h2>
        </div>
      </div>
      
      <Searchbarmenu/>


      <div className='mt-3 mr-10 mb-3 ml-auto '>
        <button className='py-2 px-8 rounded-md bg-gray-100 mr-3.5 hover:rounded-xl hover:bg-cyan-400 transition-all duration-300 ease-linear cursor-pointer' >Log in</button>
        <button className='py-2 px-8 rounded-md bg-neutral-800 hover:bg-cyan-400 text-white hover:text-black hover:rounded-xl  transition-all duration-300 ease-linear cursor-pointer'>Register</button>
      </div>
      
    </nav>
  )
}

