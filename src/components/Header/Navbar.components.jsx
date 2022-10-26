import React from 'react'
import Searchbar from './Searchbar.component';
import './Navbar.styles.scss'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <div>
          <h2>Gamess</h2>
          <img src={"./assets/game-icons_game-console.png"} />
        </div>
        <Searchbar/>
        <div className='navbar__buttons'>
          <button>Log in</button>
          <button>Register</button>
        </div>
    </nav>
  )
}

