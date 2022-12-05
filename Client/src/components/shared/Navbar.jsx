import React from 'react'
import Searchbarmenu from './Searchbar'
import logo from '../../assets/game-icons_game-console.svg'


export default function Navbar() {
  return (
    <div className='p-3 grid grid-cols-7 bg-gray-300'>

      <div className='col-span-1 m-auto'>
        <a href="/" className=''>
          <div className=' inline-flex'>
            <figure>
              <img className='' src={logo} alt="Website Logo" />
            </figure>
            <div className='my-auto mx-3'>
              <h2 className='text-4xl font-poppins'>Gamess</h2>
            </div>
          </div>

        </a>
      </div>

      <div className="col-span-3">
      <Searchbarmenu />
      </div>

      <div  className="col-span-1"></div>

      <div className='mt-3 mr-10 mb-3 ml-auto col-span-2 content-center'>
        <button className='py-2 px-8 rounded-md mr-3.5 text-white bg-medium-grey opacity-70 hover:opacity-100 transition-all duration-300 ease-linear cursor-pointer' >Log in</button>
        <button className='py-2 px-8 rounded-md mr-3.5 text-white bg-medium-grey opacity-70 hover:opacity-100 transition-all duration-300 ease-linear cursor-pointer'>Register</button>
      </div>

    </div>
  )
}

