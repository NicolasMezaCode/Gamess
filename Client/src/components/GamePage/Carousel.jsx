import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Gallery({urls}) {
    console.log()


  return (
    <Carousel autoPlay interval="5000" transitionTime="1000" infiniteLoop>

    <div>
        <img src={`${urls[0]}`} alt="" />
    </div>
    <div>
        <img src={`${urls[1]}`} alt="" />
    </div>
    <div>
        <img src={`${urls[2]}`} alt="" />
    </div>
    <div>
        <img src={`${urls[3]}`} alt="" />
    </div>

</Carousel>
  )
}