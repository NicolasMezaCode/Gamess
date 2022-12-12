import React from "react";
import GoW from '../../assets/God_of_War_II_cover.jpg'

export default function Similar() {
    const image = [GoW]
    return (
            <div className="max-w-screen-xl mx-auto rounded-md bg-medium-grey shadow-xl hover:drop-shadow-lg transition-all duration-300 ease-linear min-h-fit mt-7 mb-24">
                <h3 className="py-8 text-center text-white font-poppins mr-1 mobile:text-4xl text-2xl">Similar Games</h3>
                <div className="grid md:grid-col-4 grid-col-2 md:grid-rows-none grid-rows-2 grid-flow-col gap-4 pb-7">
                    <div className=" ">
                        <a>
                            <figure className="ml-9 mr-9 hover:drop-shadow-lg transition-all duration-300 ease-linear opacity-80 hover:opacity-100 hover:scale-101">
                                <img src={image} alt="cover of the games" className="rounded-lg"></img>
                                <span className="flex  items-center justify-center mt-2 ">
                                    <h4 className="text-white font-poppins mr-1 mobile:text-3xl text-xl text-center">Game</h4>
                                </span>
                            </figure>
                        </a>
                    </div>
                    <div>
                        <div className="">
                            <a>
                                <figure className="ml-9 mr-9 w-fit hover:drop-shadow-lg transition-all duration-300 ease-linear opacity-80 hover:opacity-100 hover:scale-101">
                                    <img src={image} alt="cover of the games" className="rounded-lg w-full h-full"></img>
                                    <span className="flex  items-center justify-center mt-2">
                                        <h4 className="text-white font-poppins mr-1 mobile:text-3xl text-xl text-center">Game</h4>
                                    </span>
                                </figure>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className=" ">
                            <a>
                                <figure className="ml-9 mr-9  hover:drop-shadow-lg transition-all duration-300 ease-linear opacity-80 hover:opacity-100 hover:scale-101">
                                    <img src={image} alt="cover of the games" className="rounded-lg"></img>
                                    <span className="flex  items-center justify-center mt-2">
                                        <h4 className="text-white font-poppins mr-1 mobile:text-3xl text-xl text-center">Game</h4>
                                    </span>
                                </figure>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <a>
                                <figure className="ml-9 mr-9 hover:drop-shadow-lg transition-all duration-300 ease-linear opacity-80 hover:opacity-100 hover:scale-101">
                                    <img src={image} alt="cover of the games" className="rounded-lg"></img>
                                    <span className="flex  items-center justify-center mt-2 ">
                                        <h4 className="text-white font-poppins mr-1 mobile:text-3xl text-xl text-center">Game</h4>
                                    </span>
                                </figure>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    );
}
