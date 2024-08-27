const express= require('express')
const app = express()
const mongoose= require('mongoose')
const dotenv = require('dotenv')
const dbConfig= require("./config/dbConfig")
const userRouter = require('./routes/userRouter')
const movieRouter = require('./routes/movieRouter')

dotenv.config()
const PORT = process.env.PORT || 3000
// Global Middleware
app.use(express.json())
// Auth
app.use("/app/v1/users",userRouter)
app.use("/app/v1/users/admin",movieRouter)

app.use("/",(req,res)=>{
    res.send('Hello World!')
})

app.listen(PORT,()=>{
    console.log("Listing to port:",PORT );
    
})