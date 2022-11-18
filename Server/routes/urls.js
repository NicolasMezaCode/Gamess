const express=require('express')
const {showMostRated,showRecent}=require('../controllers/urlsController')

const router=express.Router()

router.get('/most-rated',showMostRated)
router.get('/recent',showRecent)

module.exports=router