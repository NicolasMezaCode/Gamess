import React from 'react'
import {AiFillStar} from 'react-icons/Ai'
import { Link } from 'react-router-dom'
export default function RatedGame({rating,cover,id}) {
const image=`https://images.igdb.com/igdb/image/upload/t_cover_big/${cover.image_id}.jpg`
const stars=Math.round(rating)*5/100
const formatedRating=stars.toFixed(1)
  return (
    <div className='mt-3'>
      <Link to={`/game/${id}`}>
        <figure className='ml-9 mr-9'><img className='' src={image} alt="cover of the games" />
          <span className='flex  items-center justify-center mt-2'>
            <h4 className='text-white font-poppins mr-1 text-3xl'>{formatedRating}</h4>
            <AiFillStar className='text-amber-600 w-7 h-auto'/>
          </span>
        </figure>
      </Link>
    </div>
  )
}
