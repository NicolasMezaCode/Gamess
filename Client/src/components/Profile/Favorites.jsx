import React from 'react'
import gow from '../../assets/God_of_War_II_cover.jpg'
import { BsFillXCircleFill } from 'react-icons/Bs'

export default function Favorites() {


    return (
        <div >
            <div className=" max-w-screen-xl mx-auto rounded-md bg-medium-grey shadow-xl hover:drop-shadow-lg transition-all duration-300 ease-linear min-h-fit mt-7 mb-24">
                <h3 className="py-8 text-center text-white font-poppins mr-1 text-4xl">Favorite Games</h3>
                <div className=" pb-7">
                    <div className=" grid grid-col-4 grid-flow-col gap-4 ml-9 ">



                        <a >
                            <figure className=" w-fit">
                                <div className='flex'>
                                    <img src={gow} alt="cover of the games" className="rounded-lg shadow-lg"></img>
                                    <BsFillXCircleFill className='text-white -mt-2 -ml-2 opacity-80 hover:opacity:100 transition-all duration-300 ease-linear ' />
                                </div>
                                <span className="flex  items-center justify-center mt-2 ">
                                    <h4 className="text-white font-poppins text-3xl text-center"> asfa </h4>
                                </span>
                            </figure>
                        </a>
                        <a>
                            <figure className=" w-fit">
                                <div className='flex'>
                                    <img src={gow} alt="cover of the games" className="rounded-lg shadow-lg"></img>
                                    <BsFillXCircleFill className='text-white -mt-2 -ml-2' />
                                </div>
                                <span className="flex  items-center justify-center mt-2 ">
                                    <h4 className="text-white font-poppins text-3xl text-center"> asfa </h4>
                                </span>
                            </figure>
                        </a>
                        <a>
                            <figure className=" w-fit">
                                <div className='flex'>
                                    <img src={gow} alt="cover of the games" className="rounded-lg shadow-lg"></img>
                                    <BsFillXCircleFill className='text-white -mt-2 -ml-2' />
                                </div>
                                <span className="flex  items-center justify-center mt-2 ">
                                    <h4 className="text-white font-poppins text-3xl text-center"> asfa </h4>
                                </span>
                            </figure>
                        </a>
                        <a>
                            <figure className=" w-fit">
                                <div className='flex'>
                                    <img src={gow} alt="cover of the games" className="rounded-lg shadow-lg"></img>
                                    <BsFillXCircleFill className='text-white -mt-2 -ml-2' />
                                </div>
                                <span className="flex  items-center justify-center mt-2 ">
                                    <h4 className="text-white font-poppins text-3xl text-center"> asfa </h4>
                                </span>
                            </figure>
                        </a>


                    </div>
                </div>
            </div>
        </div>
    )
}
