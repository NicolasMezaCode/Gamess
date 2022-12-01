// @ts-nocheck
import React, { useEffect, useState } from "react";
import Description from './Description'
import Hero from './Hero'
import Information from './Information'
import Sellers from './Sellers'
import { useParams } from "react-router-dom";
import {getGamePage} from "../../helpers/getGamePage"
import Gallery from "./Carousel";

export default function Game() {
  // How to get the id from the parameters
  const params=useParams()
  const id=params.id
  const [gameData,setGameData]=useState()
  
  useEffect(() => {
    const gamePage=Promise.resolve(getGamePage(id))
    gamePage.then(data=>{
      setGameData(data[0])
    })
  }, []);
  useEffect(()=>{
    let imageUrls=[]
    if(gameData!=undefined){ 
      gameData.screenshots.map((screenshot)=>{
        const id=screenshot.image_id
        imageUrls.push(`https://images.igdb.com/igdb/image/upload/t_1080p/${id}.jpg`)
      })
    }
    console.log(imageUrls)
  },[gameData])

  return (
    <div className=''>
      {gameData?<Hero name={gameData.name} cover={gameData.cover} genres={gameData.genres} platforms={gameData.platforms} rating={gameData.aggregated_rating} engine={gameData.game_engines}  />:null
      }
      {gameData?<Description summary={gameData.summary} />:null}
      <Information />
      <Sellers />
      <Gallery/>
    </div>
  )
}
