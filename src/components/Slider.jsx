import React, { useState } from 'react'
import readDead from '../assets/read-dead.png'
import elden from '../assets/elden.webp'
import gow from '../assets/gow.webp'
import { useEffect } from 'react'
export default function Slider() {
    const [counter,setCounter]=useState(0)
    const images=[gow,elden,readDead]
    const changeImage=()=>{
        if(counter<images.length-1){
            setCounter(prev=>prev+1)
        }
        else{setCounter(prev=>prev=0)}
    }
    // useEffect(()=>{
    //         const interval=setInterval(()=>{
    //             changeImage()
    //             console.log(counter)
    //         },2000)
    //         return ()=>clearInterval(interval)
    // },[counter])

  return (
    <div>
        <figure className='flex justify-center items-center w-screen h-[28rem]  '><img className='w-screen h-full object-cover' src={images[counter]} alt="" /></figure>
    </div>
  )
}
