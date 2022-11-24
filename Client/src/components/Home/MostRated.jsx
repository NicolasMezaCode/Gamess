import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getMostRated } from '../../helpers/getMostRated'
import RatedGame from './RatedGame'
export default function MostRated() {
  const [mostRated,setMostrated]=useState([])
  useEffect(()=>{
    const ratedGames=Promise.resolve(getMostRated())
    ratedGames.then(data=>{
      setMostrated(data)
    })
  },[])
  console.log(mostRated)
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex justify-center items-center p-4 bg-zinc-900 rounded-lg'>
        <h3 className='font-poppins font-medium text-white text-5xl  '>Most Rated Games</h3>
      </div>
      <section className='bg-zinc-900 w-screen max-h-[30rem] flex justify-around items-center m-16 pb-16 pt-16'>
        {mostRated.map((game)=><RatedGame key={game.id}  rating={game.aggregated_rating} cover={game.cover} id={game.id}/>)}
      </section>
    </div>
  )
}
