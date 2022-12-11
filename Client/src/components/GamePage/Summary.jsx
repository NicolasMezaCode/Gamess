import React from 'react'

export default function Summary({summary}) {

  return (
    <div className=' min-h-fit p-16'>
        <div className='pt-36 pb-24'>
          <h2 className=' text-center lg:text-4xl md:text-3xl text-2xl max-w-screen-xl mx-auto '>{summary}</h2>
        </div>
    </div>
  )
}