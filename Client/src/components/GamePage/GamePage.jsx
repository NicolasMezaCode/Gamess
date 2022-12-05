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
    <div className='py-1 flex flex-col gap-6'>
      {gameData?<Hero name={gameData.name} cover={gameData.cover} genres={gameData.genres} platforms={gameData.platforms} rating={gameData.aggregated_rating} engine={gameData.game_engines}  />:null
      }
      {gameData?<Summary summary={gameData.summary} />:null}

      <HowLong />
      
      {gameData?<Information id={gameData.id} category={gameData.category} release={gameData.first_release_date} modes={gameData.game_modes} multiplayer={gameData.multiplayer_modes} tags={gameData.tags}/>:null}
      
      {gameData?<CarouselImages cover={gameData.screenshot} />:null}

      {gameData?<Similar name={gameData.name} cover={gameData.cover} similar={gameData.similar_games}  />:null
      }
    </div>
  )
}
