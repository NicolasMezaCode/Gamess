import React from 'react'
import Avatar from './Avatar'
import Favorites from './Favorites'

export default function Profile() {
  return (
      <div className='p-10'>
        <Avatar />
        <Favorites />
      </div>
  )
}
