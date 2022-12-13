import React from 'react';
import styled from "styled-components";
import Searchbarmenu from './Searchbar';
import logo from '../../assets/game-icons_game-console.svg'

export default function Dropdown({ isOpen, toggleDropdown }) {

  const DpDrawer = styled.div`
    transform: translateX(${isOpen ? '0' : '-100%'});
    `

  return (
    <div>
      {isOpen && <div className='h-full w-full z-30 absolute top-0 left-0 bg-black bg-opacity-30 transition-all duration-300 ease-linear ' onClick={toggleDropdown}>

        <DpDrawer isOpen={isOpen} className='p-3 absolute z-40 top-0 h-screen w-1/2 marker:w-6/12 bg-white transition-all duration-300 ease-linear'>
        <div className='w-full inline-flex hover:text-wierdo-orange transition-all duration-300 ease-linear cursor-pointer'>

              <figure className=''>
                <img className='' src={logo} alt="Website Logo " />
              </figure>
              <div className='my-auto mx-3 hover:scale-101'>
                <h2 className='text-4xl font-poppins '>Gamess</h2>
              </div>
            </div>

          <Searchbarmenu/>

          <div className='mx-auto my-10 content-center'>
            <button className='py-2 px-9 mx-5 rounded-md text-white bg-medium-grey opacity-70 hover:opacity-100 transition-all duration-300 ease-linear cursor-pointer hover:scale-101' >Log in</button>
            <button className='py-2 px-9 mx-5 rounded-md text-white bg-medium-grey opacity-70 hover:opacity-100 transition-all duration-300 ease-linear cursor-pointer hover:scale-101'>Register</button>
          </div>

        </DpDrawer>

      </div>}
    </div>
  )
}