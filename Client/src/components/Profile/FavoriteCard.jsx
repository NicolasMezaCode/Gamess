import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillXCircleFill } from 'react-icons/Bs'
export default function FavoriteCard({cover,id,handleDelete,name}) {
  const image=`https://images.igdb.com/igdb/image/upload/t_cover_big/${cover.image_id}.jpg`
  const erraseId=()=>{
    handleDelete(id)
  }
  return (
        <div className=" w-fit">
            <div className='flex'>
          <Link to={`/game/${id}`} onClick={() => {window.location.href=`/game/${id}`}} >
                <img src={image} alt="cover of the games" className="rounded-lg shadow-lg"></img>
          </Link>  
                <BsFillXCircleFill className='text-white -mt-2 -ml-2 opacity-80 hover:opacity:100 transition-all duration-300 ease-linear' onClick={erraseId} />
            </div>
        </div>
  )
}
