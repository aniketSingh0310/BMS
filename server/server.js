const express= require('express')
const cors=require('cors')
const app = express()
const mongoose= require('mongoose')
const dotenv = require('dotenv')
const dbConfig= require("./config/dbConfig")
const userRouter = require('./routes/userRouter')
const movieRouter = require('./routes/movieRouter')
const theatreRouter = require("./routes/theatreRouter");
dotenv.config()
const PORT = process.env.PORT || 3000

// Enable CORS for your frontend
app.use(cors({
    origin: 'http://localhost:3000',  // Allow requests from this origin
    credentials: true                 // Allow credentials like cookies, authorization headers
}));
// Global Middleware
app.use(express.json())
// Auth
app.use("/app/v1/users",userRouter)
app.use("/app/v1/users/admin",movieRouter)
app.use("/app/v1/users/theatres", theatreRouter);

app.use("/",(req,res)=>{
    res.send('Hello World!')
})

app.listen(PORT,()=>{
    console.log("Listing to port:",PORT );
    
})