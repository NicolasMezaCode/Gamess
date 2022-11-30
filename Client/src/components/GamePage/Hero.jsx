import { React, useState, useEffect } from 'react'
import { getCover } from '../../helpers/getCover'
import { useParams } from "react-router-dom";

export default function Hero() {
    
    const query = new URLSearchParams(window.location.search)
    const cover = query.get('cover');
    console.log(params.cover)




    return (
        <div className='flex w-fit relative'>
            <div className='h-140 w-screen'>
                <figure style={{ backgroundImage: `url(${this.props.params.cover})` }} className='bg-no-repeat bg-cover bg-center blur-md min-h-full min-w-full bg-fixed'></figure>
            </div>
            <div className='absolute min-w-full pt-40' >
                <div className='grid grid-cols-2'>
                    <div className='ml-80'>
                        <img src={tthis.props.params.cover} alt="" className=' rounded-xl w-128 h-132 border-solid border-4 border-black shadow-xl hover:drop-shadow-lg transition-all duration-300 ease-linear' />
                    </div>
                    <div className='backdrop-blur-xl bg-white/80 w-140  rounded-xl shadow-xl hover:drop-shadow-lg transition-all duration-300 ease-linear'>
                        <div className='text-center'>
                            <h2 className='py-10 text-5xl'>Game Name Here</h2>
                            <p className='py-3 text-4xl'>4.9</p>
                        </div>
                        <div className='grid grid-cols-3 min-h-full px-12 text-2xl '>
                            <div className=''>
                                <ul className=''>
                                    
                                    <li className='py-10'>Genre: {this.props.params.genres} </li>
                                    <li className='py-10'>Platforms: </li>
                                    <li className='py-10'>Developer: </li>
                                    <li className='py-10'>Publisher: </li>
                                </ul>
                            </div>
                            <div className='col-span-2'>
                                <ul className=''>
                                    <li className='py-10'>{gameCover.genres}</li>
                                    <li className='py-10'>{gameCover.plataforms} </li>
                                    <li className='py-10'>{gameCover.involved_companies} </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}