import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillXCircleFill } from 'react-icons/Bs'
export default function FavoriteCard({cover,id,handleDelete,name}) {
  const image=`https://images.igdb.com/igdb/image/upload/t_cover_big/${cover.image_id}.jpg`
  console.log('is rendering')
  const erraseId=()=>{
    handleDelete(id)
  }
  return (
        <div className=" w-fit">
          <Link to={`/game/${id}`} onClick={() => {window.location.href=`/game/${id}`}} >
            <div className='flex'>
                <img src={image} alt="cover of the games" className="rounded-lg shadow-lg"></img>
                <BsFillXCircleFill className='text-white -mt-2 -ml-2 opacity-80 hover:opacity:100 transition-all duration-300 ease-linear' onClick={erraseId} />
            </div>
          </Link>  
        </div>
  )
}
