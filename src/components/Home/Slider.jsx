import React, { useState } from 'react'
import msg2 from '../../assets/d87vcx7-d92db724-897d-4193-9b63-e5f6af087211.jpg'
import elden from '../../assets/elden.webp'
import spider from '../../assets/spiderman.jpg'
import {Swiper,SwiperSlide} from 'swiper/react'
import{Navigation,Autoplay} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation';
export default function Slider() {
  // autoplay={{delay:6000,disableOnInteraction:false}}
  return (
    <>
     <Swiper navigation={true} className='flex justify-center overflow-hidden items-center w-[100%]  pb-10'  modules={[Navigation,Autoplay]}>
      <SwiperSlide>

        <figure className="relative h-[32rem] w-[100%] flex items-center justify-center bg-black">
            <img
                className='absolute h-[32rem] w-[100%] object-cover opacity-50'
                src={elden}
                alt="elden ring image"
            />
            <div className="absolute h-fit text-white z-10 ">
                <h1 className="text-7xl  font-bebas tracking-wider">Welcome to your starlight into the gaming world</h1>
            </div>
        </figure>
      </SwiperSlide>
      <SwiperSlide>
        <figure className="relative h-[32rem] w-[100%] flex items-center justify-center bg-black">
          <img
              className='absolute h-[32rem]  w-[100%] object-cover opacity-50'
              src={spider}
              alt="spiderman"
          />
          <div className="absolute text-white z-10">
            <h2 className="text-7xl font-bebas tracking-wider">Welcome to your starlight into the gaming world</h2>
            <p className="text-lg font-semibold">Your description goes here.</p>
          </div>
        </figure>
      </SwiperSlide>
      <SwiperSlide>
        <figure className="relative h-[32rem] w-[100%] flex items-center justify-center bg-black">
          <img
              className='absolute h-[32rem]  w-[100%] object-cover opacity-50'
              src={msg2}
              alt="metal gear image"
          />
          <div className="absolute text-white z-10">
            <h2 className="text-7xl font-bebas tracking-wider">Welcome to your starlight into the gaming world</h2>
            <p className="text-lg font-semibold">Your description goes here.</p>
          </div>
        </figure>

      </SwiperSlide>
</Swiper>





    </>
  )
}
