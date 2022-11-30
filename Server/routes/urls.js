const express=require('express')
const {showMostRated,showRecent,showGame}=require('../controllers/urlsController')
const {showSearch,showPreset}=require('../controllers/searchController')

const router=express.Router()

router.get('/most-rated',showMostRated)
router.get('/recent',showRecent)
router.get('/game-page',showGame)
router.get('/search/:name',showSearch)
router.get('/search',showRecent)

module.exports=router