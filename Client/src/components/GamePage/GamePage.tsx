import React, { useEffect, useState } from "react";
import ImageCarousel, { ImageType } from './Carousel'
import Description from './Description'
import GameHeader from './Hero'
import Information from './Information'
import Sellers from './Sellers'
import "./caroulsel.css";


export default function Game() {

  const [images, setImages] = useState<ImageType[]>();
  
  useEffect(() => {
    setImages(
      Array.from(Array(10).keys()).map((id) => ({
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
