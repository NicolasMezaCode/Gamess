import React from 'react'

export default function Information({ id, category, release, modes, multiplayer, tags }) {

    return (
        <div className=' text-4xl'>
            <div className='my-12'>
                <div className=' max-w-screen-md mx-auto rounded-md bg-light-grey shadow-xl hover:drop-shadow-lg transition-all duration-300 ease-linear'>
                    <div className=' px-12 text-2xl '>
                        <ul className='grid grid-cols-3 min-h-full'>
                            <li className='py-10'>Category: </li>
                            <li className='py-10 col-span-2'>{category ? category.map((category) => <li className='ml-1 mr-1' key={category.id}>{category.name}</li>) : null} </li>
                        </ul>
                        <ul className='grid grid-cols-3 min-h-full'>
                            <li className='py-10'>Release Date: </li>
                            <li className='py-10 col-span-2'>  {release ? release.map((release) => <li className='ml-1 mr-1' key={release.id}>{release.date}</li>) : null}  </li>
                        </ul>
                            <ul className='grid grid-cols-3 min-h-full '>
                                <li className='py-10 '>Game Modes: </li>
                                <li className='py-10 col-span-2'> {modes ? modes.map((modes) => <li className='ml-1 mr-1' key={modes.id}>{modes.name}</li>) : null} </li>
                            </ul>
                        <ul className='grid grid-cols-3 min-h-full'>
                            <li className='py-10'>Multiplayer Modes: </li>
                            <li className='py-10 col-span-2'> {multiplayer ? multiplayer.map((multiplayer) => <li className='ml-1 mr-1' key={multiplayer.id}>{multiplayer.name}</li>) : null} </li>
                        </ul>
                        <ul className='grid grid-cols-3 min-h-full'>
                            <li className='py-10'>Tags: </li>
                            <li className='py-10 col-span-2'> {tags ? tags.map((tags) => <li className='ml-1 mr-1' key={tags.id}>{tags.name}</li>) : null} </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}