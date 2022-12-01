import React from 'react'

export default function Description({summary}) {

  return (
    <div className='h-128'>
        <div className='pt-80'>
          <h2 className=' text-center text-4xl max-w-screen-xl mx-auto'>{summary}</h2>
        </div>
    </div>
  )
}