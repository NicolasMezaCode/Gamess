import React from "react";

export default function Similar({ similar }) {
    return (
            <div className=" max-w-screen-xl mx-auto rounded-md bg-medium-grey shadow-xl hover:drop-shadow-lg transition-all duration-300 ease-linear min-h-fit mt-7 mb-24">
                <h3 className="py-8 text-center text-white font-poppins mr-1 text-4xl">Similar Games</h3>
                <div className="grid grid-col-4 grid-flow-col gap-4 pb-7">
                    <div className=" ">
                        <a>
                            <figure className="ml-9 mr-9 hover:drop-shadow-lg transition-all duration-300 ease-linear opacity-80 hover:opacity-100 hover:scale-101">
                                <img src={`${similar[0]}`} alt="cover of the games" className="rounded-lg"></img>
                                <span className="flex  items-center justify-center mt-2 ">
                                    <h4 className="text-white font-poppins mr-1 text-3xl text-center"></h4>
                                </span>
                            </figure>
                        </a>
                    </div>
                    <div>
                        <div className="">
                            <a>
                                <figure className="ml-9 mr-9 hover:drop-shadow-lg transition-all duration-300 ease-linear opacity-80 hover:opacity-100 hover:scale-101">
                                    <img src={similar} alt="cover of the games" className="rounded-lg"></img>
                                    <span className="flex  items-center justify-center mt-2">
                                        <h4 className="text-white font-poppins mr-1 text-3xl text-center"></h4>
                                    </span>
                                </figure>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className=" ">
                            <a>
                                <figure className="ml-9 mr-9  hover:drop-shadow-lg transition-all duration-300 ease-linear opacity-80 hover:opacity-100 hover:scale-101">
                                    <img src={`${similar[2]}`} alt="cover of the games" className="rounded-lg"></img>
                                    <span className="flex  items-center justify-center mt-2">
                                        <h4 className="text-white font-poppins mr-1 text-3xl text-center"></h4>
                                    </span>
                                </figure>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <a>
                                <figure className="ml-9 mr-9 hover:drop-shadow-lg transition-all duration-300 ease-linear opacity-80 hover:opacity-100 hover:scale-101">
                                    <img src={`${similar[3]}`} alt="cover of the games" className="rounded-lg"></img>
                                    <span className="flex  items-center justify-center mt-2 ">
                                        <h4 className="text-white font-poppins mr-1 text-3xl text-center"></h4>
                                    </span>
                                </figure>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    );
}
