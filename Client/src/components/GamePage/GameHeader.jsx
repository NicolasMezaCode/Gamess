import React from 'react'
import GoW from '../../assets/God_of_War_II_cover.jpg'

export default function GameHeader() {

    const background = [GoW];


    return (
        <div className='flex w-fit relative'>
                <div className='h-140 w-screen'>
                    <figure style={{ backgroundImage: `url(${GoW})` }} className='bg-no-repeat bg-cover bg-center blur-md min-h-full min-w-full bg-fixed'></figure>
                </div>
            <div className='absolute min-w-full pt-40' >
                <div className='grid grid-cols-2'>
                    <div className='ml-80'>
                        <img src={GoW} alt="" className=' rounded-lg w-128 h-132 border-solid border-2 border-black' />
                    </div>
                    <div className='backdrop-blur-xl bg-white/80 w-140  rounded-lg'>
                        <div className='grid grid-cols-2 col-span-2 min-h-full p-5'>
                            <div className=''>
                                <ul className=''>
                                    <li>Genre: </li>
                                    <li>Platforms: </li>
                                    <li>Developer: </li>
                                    <li>Publisher: </li>
                                </ul>
                            </div>
                            <div>
                                <ul className='col-span-1'>
                                    <li>test Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis reprehenderit, aspernatur mollitia suscipit, asperiores nostrum veniam pariatur officia impedit unde vel repellat fuga neque? Inventore saepe tenetur mollitia ipsam molestiae! </li>
                                    <li>test </li>
                                    <li>test </li>
                                    <li>test </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}