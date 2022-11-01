import React from 'react'

export default function MostRated() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex justify-center items-center p-4 bg-zinc-900 rounded-lg'>
        <h3 className='font-poppins font-medium text-white text-5xl  '>Most Rated Games</h3>
      </div>
      <section className='bg-zinc-900 w-screen max-h-[29.37rem] flex justify-around items-center m-16 pb-16 pt-16'>
        <div className='bg-white h-80 w-56'>
        </div>
        <div className='bg-white h-80 w-56'>

        </div>
        <div className='bg-white h-80 w-56'>

        </div>
        <div className='bg-white h-80 w-56'>
        </div>
      </section>
    </div>
  )
}
