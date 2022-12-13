import React from 'react'
import Searchbarmenu from './Searchbar'
import logo from '../../assets/game-icons_game-console.svg'
import { FaBars } from 'react-icons/fa'


export default function Navbar({toggleDropdown}) {
  return (
    <div className=''>
      <div className='laptop:hidden flex m-3'>
      <FaBars onClick={toggleDropdown}  className='text-2xl my-auto mx-3'/>
      <h2 className='text-4xl font-poppins mx-auto'>Gamess</h2>
      </div>
      <div className='p-3 pr-10 laptop:grid hidden grid-cols-7 '>


        <div className='col-span-1 m-auto'>

          <a href="/" className=''>
            <div className='w-full inline-flex hover:text-wierdo-orange transition-all duration-300 ease-linear cursor-pointer'>
              <figure className=''>

                <img className='' src={logo} alt="Website Logo " />
              </figure>
              <div className='my-auto mx-3 hover:scale-101'>
                <h2 className='text-4xl font-poppins '>Gamess</h2>
              </div>
            </div>

          </a>
        </div>
        <div className="col-span-3">
          <Searchbarmenu />
        </div>

        <div className="col-span-1"></div>

        <div className='ml-auto my-auto col-span-2 content-center'>
          <button className='py-2 px-9 mx-5 rounded-md text-white bg-medium-grey opacity-70 hover:opacity-100 transition-all duration-300 ease-linear cursor-pointer hover:scale-101' >Log in</button>
          <button className='py-2 px-9 mx-5 rounded-md text-white bg-medium-grey opacity-70 hover:opacity-100 transition-all duration-300 ease-linear cursor-pointer hover:scale-101'>Register</button>
        </div>

      </div>
    </div>
  )
}

