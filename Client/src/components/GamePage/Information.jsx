import React from 'react'

export default function Information({ keywords, perspective, release, modes, }) {
    return (
        <div className=' text-4xl'>
            <div className='my-12'>
                <div className=' max-w-screen-md mx-auto rounded-md bg-light-grey shadow-xl hover:drop-shadow-lg transition-all duration-300 ease-linear'>
                    <div className=' px-12 text-2xl '>
                        <ul className='grid grid-cols-3 min-h-full'>
                            <li className='py-10'>Player Perspective: </li>
                            {perspective ? perspective.map((perspective) => <li className='ml-1 mr-1 py-10' key={perspective.id}>{perspective.name}</li>) : null}
                        </ul>
                        <ul className='grid grid-cols-3 min-h-full '>
                            <li className='py-10 '>Game Modes: </li>
                            <li className='py-10 col-span-2'> {modes ? modes.map((modes) => <li className='ml-1 mr-1' key={modes.id}>{modes.name}</li>) : null} </li>
                        </ul>
                        <ul className='grid grid-cols-3 min-h-full'>
                            <li className='py-10'>Release Dates: </li>
                            <li className='py-10 col-span-2'> {release ? release.map((release) => <li className='ml-1 mr-1' key={release.id}>{release.human}</li>) : null} </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}