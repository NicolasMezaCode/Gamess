import React, { useEffect, useState } from "react";
import ImageCarousel, { ImageType } from './Carousel'
import Description from './Description'
import GameHeader from './Hero'
import Information from './Information'
import Sellers from './Sellers'
import "./caroulsel.css";
import { useParams } from "react-router-dom";


export default function Game() {
  // How to get the id from the parameters
const params=useParams()
console.log(params.id)


  const [images, setImages] = useState<ImageType[]>();
  
  useEffect(() => {
    setImages(
      Array.from(Array(7).keys()).map((id) => ({
        id,
        url: `https://picsum.photos/1000?random=${id}`
      }))
    );
  }, []);
  
  
  return (
    <div className=''>
      <GameHeader />
      <Description />
      <Information />
      <Sellers />
      <ImageCarousel images={images} />
    </div>
  )
}
