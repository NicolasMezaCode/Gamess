import React from 'react'

export default function Popular() {
  return (
    <div className='flex flex-col justify-center items-center pb-16'>
      <div className='flex justify-center items-center p-4  bg-zinc-900 rounded-lg'>
        <h3 className='font-poppins font-medium text-white text-5xl'>Popular Games</h3>
      </div>
      <div className='grid gap-16 grid-cols-2 grid-rows-3 mt-16  '>
        <div className='bg-darker-grey h-96 w-600 rounded-lg'></div>
        <div className='bg-darker-grey  h-96 w-600 rounded-lg'></div>
        <div className='bg-darker-grey  h-96 w-600 rounded-lg'></div>
        <div className='bg-darker-grey  h-96 w-600 rounded-lg'></div>
        <div className='bg-darker-grey  h-96 w-600 rounded-lg'></div>
        <div className='bg-darker-grey  h-96 w-600 rounded-lg'></div>
      </div>
    </div>
  )
}
