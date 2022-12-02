import React from 'react'

export default function Sellers({summary}) {

    return (
        <div className=' text-4xl'>
            <div className='my-12'>
                <div className='min-h-48 max-w-screen-xl mx-auto rounded-md bg-light-grey shadow-xl hover:drop-shadow-lg transition-all duration-300 ease-linear'>
                    <div className='p-12'>
                        <h2>{summary}</h2>

                    </div>
                </div>
            </div>
        </div>
    )
}