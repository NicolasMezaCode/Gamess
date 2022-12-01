const express=require('express')
const {showMostRated,showRecent,showGamePage}=require('../controllers/urlsController')
const {showSearch}=require('../controllers/searchController')

const router=express.Router()

router.get('/most-rated',showMostRated)
router.get('/recent',showRecent)
router.get('/search/:name',showSearch)
router.get('/search',showRecent)
router.get('/game/:id',showGamePage)

module.exports=router