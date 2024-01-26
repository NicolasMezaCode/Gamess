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
     <Swiper navigation={true} className='flex justify-center overflow-hidden items-center w-[100%]  pb-16'  modules={[Navigation,Autoplay]}>
      <SwiperSlide>

        <figure className="relative h-[32rem] w-[100%] flex items-center justify-center bg-black">
            <img
                className='absolute h-[32rem] w-[100%] object-cover opacity-50'
                src={elden}
                alt="elden ring image"
            />
            <div className="absolute h-fit text-white z-10 ">
                <h1 className="text-5xl mx-11 text-center  sm:text-7xl  font-bebas tracking-wider h-auto">Welcome to your starlight into the gaming world</h1>
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
          <div className="absolute text-white z-10 flex flex-col items-center">
            <h2 className="text-5xl mx-11 text-center  sm:text-7xl  font-bebas tracking-wider h-auto">Check and make your own game reviews</h2>
            <p className="text-2xl font-semibold">You can create your own narrative and share your opinion.</p>
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
            <h2 className="text-5xl mx-11 text-center  sm:text-7xl  font-bebas tracking-wider h-auto">Create a play-later list so you don't miss out on new launches :)</h2>

          </div>
        </figure>

      </SwiperSlide>
</Swiper>





    </>
  )
}
