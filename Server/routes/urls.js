const express=require('express')
const {showMostRated,showRecent,showGame}=require('../controllers/urlsController')

const router=express.Router()

router.get('/most-rated',showMostRated)
router.get('/recent',showRecent)
router.get('/game-page',showGame)

module.exports=router