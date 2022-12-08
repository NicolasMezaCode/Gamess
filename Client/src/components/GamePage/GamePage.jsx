// @ts-nocheck
import React, { useEffect, useState } from "react";
import Summary from './Summary'
import Hero from './Hero'
import HowLong from './HowLong'
import Information from './Information'
import Similar from "./Similar";
import { useParams } from "react-router-dom";
import {getGamePage} from "../../helpers/getGamePage"
import CarouselImages from "./Carousel";

export default function Game() {
  // How to get the id from the parameters
  const params=useParams()
  const id=params.id
  const [gameData,setGameData]=useState()
  const [urls,setUrls]=useState()
  const [similar,setSimilar]=useState()
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
    setUrls(imageUrls)
  },[gameData])


  useEffect(()=>{
    let similarGames=[]
    if(gameData!=undefined){ 
      gameData.similar_games.map((similar)=>{
        const id=similar.cover.id
        similarGames.push(`https://images.igdb.com/igdb/image/upload/t_cover_big/${id}.jpg`)
      })
    }
    setSimilar(similarGames)
  },[gameData])

  return (
    <div className='py-1 flex flex-col gap-6'>
      {gameData?<Hero name={gameData.name} cover={gameData.cover} genres={gameData.genres} platforms={gameData.platforms} rating={gameData.aggregated_rating} engine={gameData.game_engines}  />:null}

      {gameData?<Summary summary={gameData.summary} />:null}

      <HowLong />
      
      {gameData?<Information modes={gameData.game_modes} release={gameData.release_dates} perspective={gameData.player_perspectives}/>:null}
      
      {urls?<CarouselImages urls={urls} />:null}

      {similar?<Similar  similar={similar}  />:null}
    </div>
  )
}
