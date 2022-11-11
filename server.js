const express = require ('express')
const path = require('path')
const urlsRouter=require('./Server/routes/urls')
const app=express()
const port=3005
const cors=require('cors')

app.use(cors({
    origin:"*",
    credentials:true,
}
))

app.use(express.urlencoded({ extended: true }));

app.use('/',urlsRouter)

app.listen(port,()=>console.log(`runnning ${port}`))