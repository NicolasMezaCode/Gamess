import React from 'react'
import GoW from '../../assets/God_of_War_II_cover.jpg'

export default function GameHeader() {

    const background = [GoW];


    return (
        <div className='flex w-fit relative'>
            <div className='h-140 w-screen'>
                <figure style={{ backgroundImage: `url(${background})` }} className='bg-no-repeat bg-cover bg-center blur-md min-h-full min-w-full bg-fixed'></figure>
            </div>
            <div className='absolute min-w-full pt-40' >
                <div className='grid grid-cols-2'>
                    <div className='ml-80'>
                        <img src={background} alt="" className=' rounded-xl w-128 h-132 border-solid border-4 border-black shadow-xl hover:drop-shadow-lg transition-all duration-300 ease-linear' />
                    </div>
                    <div className='backdrop-blur-xl bg-white/80 w-140  rounded-xl shadow-xl hover:drop-shadow-lg transition-all duration-300 ease-linear'>
                        <div className='text-center'>
                            <h2 className='py-10 text-5xl'>Game Name Here</h2>
                            <p className='py-3 text-4xl'>4.9</p>
                        </div>
                        <div className='grid grid-cols-3 min-h-full px-12 text-2xl '>
                            <div className=''>
                                <ul className=''>
                                    <li className='py-10'>Genre: </li>
                                    <li className='py-10'>Platforms: </li>
                                    <li className='py-10'>Developer: </li>
                                    <li className='py-10'>Publisher: </li>
                                </ul>
                            </div>
                            <div className='col-span-2'>
                                <ul className=''>
                                    <li className='py-10'>Third-Person, Action, Adventure</li>
                                    <li className='py-10'>PlayStation 2, PlayStation 3, PlayStation Vita </li>
                                    <li className='py-10'>SCE Studios Santa Monica </li>
                                    <li className='py-10'>Sony Computer Entertainment </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}