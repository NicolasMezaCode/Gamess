import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Gallery(screenshot) {
    const screenshots=`https://images.igdb.com/igdb/image/upload/t_cover_big/${screenshot.image_id}.jpg`
  return (
    <Carousel autoPlay interval="800000" transitionTime="1000" infiniteLoop>
    <div>
        <img src={screenshots} alt="" />
    </div>
    {/* <div>
        <img src="https://images.igdb.com/igdb/image/upload/t_1080p/x7pzfljardlljvtqcgv4.jpg" alt="" />
    </div> */}
    <div>
        <img src="https://images.igdb.com/igdb/image/upload/t_1080p/urqw7ltwmhr39gkidsih.jpg" alt="" />
    </div>
    <div>
        <img src="https://images.igdb.com/igdb/image/upload/t_1080p/sciabe.jpg" alt="" />
    </div>
    <div>
        <img src="https://images.igdb.com/igdb/image/upload/t_1080p/x5bbaqvgbpaz4hzlfeqb.jpg" alt="" />
    </div>
    <div>
        <img src="https://images.igdb.com/igdb/image/upload/t_1080p/x5bbaqvgbpaz4hzlfeqb.jpg" alt="" />
    </div>
    <div>
        <img src="https://images.igdb.com/igdb/image/upload/t_1080p/x5bbaqvgbpaz4hzlfeqb.jpg" alt="" />
    </div>
    <div>
        <img src="https://images.igdb.com/igdb/image/upload/t_1080p/x5bbaqvgbpaz4hzlfeqb.jpg" alt="" />
    </div>
    <div>
        <img src="https://images.igdb.com/igdb/image/upload/t_1080p/x5bbaqvgbpaz4hzlfeqb.jpg" alt="" />
    </div>
    <div>
        <img src="https://images.igdb.com/igdb/image/upload/t_1080p/x5bbaqvgbpaz4hzlfeqb.jpg" alt="" />
    </div>
</Carousel>
  )
}