import React from "react";

export default function Similar({name, cover, id}) {
    const image=`https://images.igdb.com/igdb/image/upload/t_cover_big/${cover.image_id}.jpg`
    return (
            <div className="py-10 max-w-screen-xl mx-auto rounded-md bg-medium-grey shadow-xl hover:drop-shadow-lg transition-all duration-300 ease-linear min-h-fit mt-7 mb-24">
                <h3 className="p-5 text-center text-white font-poppins mr-1 text-3xl">Similar Games</h3>
                <div className="grid grid-col-4 grid-flow-col gap-4 ">
                    <div className="mt-3 ">
                        <a to={`/game/${id}`}>
                            <figure className="ml-9 mr-9 hover:drop-shadow-lg transition-all duration-300 ease-linear ">
                                <img src={image} alt="cover of the games" className=""></img>
                                <span className="flex  items-center justify-center mt-2 ">
                                    <h4 className="text-white font-poppins mr-1 text-3xl">{name}</h4>
                                </span>
                            </figure>
                        </a>
                    </div>
                    <div>
                        <div className="mt-3">
                            <a to={`/game/${id}`}>
                                <figure className="ml-9 mr-9 hover:drop-shadow-lg transition-all duration-300 ease-linear">
                                    <img src={image} alt="cover of the games"></img>
                                    <span className="flex  items-center justify-center mt-2">
                                        <h4 className="text-white font-poppins mr-1 text-3xl">{name}</h4>
                                    </span>
                                </figure>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="mt-3">
                            <a to={`/game/${id}`}>
                                <figure className="ml-9 mr-9 hover:drop-shadow-lg transition-all duration-300 ease-linear">
                                    <img src={image} alt="cover of the games"></img>
                                    <span className="flex  items-center justify-center mt-2">
                                        <h4 className="text-white font-poppins mr-1 text-3xl">{name}</h4>
                                    </span>
                                </figure>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="mt-3">
                            <a hto={`/game/${id}`}>
                                <figure className="ml-9 mr-9 hover:drop-shadow-lg transition-all duration-300 ease-linear">
                                    <img src={image} alt="cover of the games"></img>
                                    <span className="flex  items-center justify-center mt-2">
                                        <h4 className="text-white font-poppins mr-1 text-3xl">{name}</h4>
                                    </span>
                                </figure>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    );
}
