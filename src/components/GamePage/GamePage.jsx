import React from 'react'
import Description from './Description'
import GameHeader from './Hero'
import Information from './Information'
import Sellers from './Sellers'


export default function Game() {

  return (
    <div className=''>
      <GameHeader />
      <Description />
      <Information />
      <Sellers />
    </div>
  )
}
