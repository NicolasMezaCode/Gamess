import React from 'react'

export default function RatedGame({rating,cover,id}) {
const image=`https://images.igdb.com/igdb/image/upload/t_cover_big/${cover.image_id}.jpg`
const stars=Math.round(rating)*5/100
  return (
    <div>
      <figure className=''><img src={image} alt="cover of the games" /></figure>
      <h4>{stars}</h4>
    </div>
  )
}
