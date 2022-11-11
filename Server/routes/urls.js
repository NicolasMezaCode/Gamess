const express=require('express')
const {showMostRated}=require('../controllers/urlsController')

const router=express.Router()

router.get('/most-rated',showMostRated)

module.exports=router