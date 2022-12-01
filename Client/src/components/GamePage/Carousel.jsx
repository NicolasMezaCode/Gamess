import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Gallery(cover) {
  const imageSmall=`//images.igdb.com/igdb/image/upload/t_thumb/${cover.image_id}.jpg`
  return (
    <div>
      <Carousel autoPlay interval="8000" transitionTime="5000" infiniteLoop>
        <div className="h-72">
          <img src={imageSmall} alt="" />
          <p className="legend">My Photo 1</p>
        </div>
        <div>
          <img src={imageSmall} alt="" />
          <p className="legend">My Photo 2</p>
        </div>
        <div>
          <img src={imageSmall} alt="" />
          <p className="legend">My Photo 3</p>
        </div>
        <div>
          <img src={imageSmall} alt="" />
          <p className="legend">My Photo 4</p>
        </div>
        <div>
          <img src={imageSmall} alt="" />
          <p className="legend">My Photo 5</p>
        </div>
      </Carousel>
    </div>
  )
}

