import React from 'react'
import Searchbar from './Searchbar.component';
import './Navbar.styles.scss'

export default function Navbar() {
  return (
    <nav className='flex bg-gray-300'>
        <div>
          <img src={"./assets/game-icons_game-console.png"} />
          <h2>Gamess</h2>
        </div>
        <Searchbar/>
        <div className='mt-3 mr-10 mb-3 ml-auto '>
          <button className='mr-3.5 px-8 rounded-md bg-cyan-500'>Log in</button>
          <button className='px-8 rounded-md bg-neutral-800 text-white'>Register</button>
        </div>
    </nav>
  )
}

