import { React, useState, useEffect } from 'react'
import { AiFillStar } from 'react-icons/Ai'

export default function Hero({ cover, rating, name, genres, platforms, engine }) {
    const imageSmall = `https://images.igdb.com/igdb/image/upload/t_cover_big/${cover.image_id}.jpg`
    const image = `https://images.igdb.com/igdb/image/upload/t_1080p/${cover.image_id}.jpg`
    const stars = Math.round(rating) * 5 / 100
    const formatedRating = stars.toFixed(1)
    return (
        <div className='flex w-fit relative'>
            <div className='h-140 w-screen'>
                <figure style={{ backgroundImage: `url(${image})` }} className='bg-no-repeat bg-cover bg-center blur-md min-h-full min-w-full bg-fixed '></figure>
            </div>
            <div className='absolute min-w-full pt-40 p-16' >
                <div className='lg:grid grid-cols-2 lg:gap-10'>
                    <div className='mx-auto w-128 h-132  lg:mb-0 mb-10'>
                        <img src={imageSmall} alt="" className=' w-screen  rounded-xl border-solid border-4 border-black shadow-xl hover:drop-shadow-lg transition-all duration-300 ease-linear ' />
                    </div>
                    <div className='mx-auto xl:w-140 backdrop-blur-xl bg-white/80 w-128 rounded-xl shadow-xl hover:drop-shadow-lg transition-all duration-300 ease-linear '>
                        <div className='text-center'>
                            <h2 className='py-12 text-5xl'>{name}</h2>
                            <span className='flex  items-center justify-center mt-3 mb-3'>
                                <h4 className='font-poppins mr-1 text-2xl'>{formatedRating}</h4>
                                <AiFillStar className='text-amber-600 w-7 h-auto' />
                            </span>
                        </div>
                        <div className=' xl:px-36 px-16 text-2xl'>
                            <ul className='grid grid-cols-2 min-h-full'>
                                <li className='py-10'>Genres: </li>
                                <li className='py-10'>{genres ? genres.map((genre) => <li className='ml-1 mr-1' key={genre.id}>{genre.name}</li>) : null}</li>
                            </ul>
                            <ul className='grid grid-cols-2 min-h-full'>
                                <li className='py-10'>Platforms: </li>
                                <li className='py-10 flex justify-between max-w-[10rem] flex-wrap '>{platforms ? platforms.map((platform) => <li key={platform.id} className=''>{platform.abbreviation}</li>) : null}  </li>
                            </ul>
                            <ul className='grid grid-cols-2 min-h-full '>
                                <li className='py-10 '>Engine: </li>
                                <li className='py-10  '>{engine ? engine.map((engine) => <li key={engine.id} className='ml-1 mr-1 h-fit'>{engine.name}</li>) : null} </li>
                            </ul>

                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}