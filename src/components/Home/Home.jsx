import React from 'react'
import Slider from './Slider'
import MostRated from './MostRated'
import Popular from './Recent'
export default function Home() {
  return (
    <>
      <Slider/>
      <MostRated/>
      <Popular/>
    </>
  )
}
