import React from 'react'

export default function Summary({summary}) {

  return (
    <div className=' min-h-fit p-16'>
        <div className='lg:pt-36 md:24 sm:12 pt-7 pb-24'>
          <h2 className=' text-center lg:text-4xl md:text-3xl text-2xl max-w-screen-xl mx-auto '>{summary}</h2>
        </div>
    </div>
  )
}