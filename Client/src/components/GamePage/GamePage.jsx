// @ts-nocheck
import React, { useEffect, useState } from "react";
import Description from './Description'
import Hero from './Hero'
import Information from './Information'
import Sellers from './Sellers'
import Similar from "./Similar";
import { useParams } from "react-router-dom";
import {getGamePage} from "../../helpers/getGamePage"
import Gallery from "./Carousel";

export default function Game() {
  // How to get the id from the parameters
  const params=useParams()
  const id=params.id
  const [gameData,setGameData]=useState()
  const [urls,setUrls]=useState()
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

  return (
    <div className='py-1 flex flex-col gap-6'>
      {gameData?<Hero name={gameData.name} cover={gameData.cover} genres={gameData.genres} platforms={gameData.platforms} rating={gameData.aggregated_rating} engine={gameData.game_engines}  />:null
      }
      {gameData?<Description summary={gameData.summary} />:null}
      <Information />
      {gameData?<Sellers summary={gameData.summary} />:null}
      {/* <SeSellersllers /> */}
      {urls?<Gallery urls={urls} />:null}
      {gameData?<Similar name={gameData.name} cover={gameData.cover} similar={gameData.similar_games}  />:null
      }
    </div>
  )
}
