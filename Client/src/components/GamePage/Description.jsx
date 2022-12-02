import React from 'react'

export default function Description({summary}) {

  return (
    <div className=' min-h-fit '>
        <div className='pt-64 pb-24'>
          <h2 className=' text-center text-4xl max-w-screen-xl mx-auto '>{summary}</h2>
        </div>
    </div>
  )
}