import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
//routes

import UserRoute from './Route/User.route.js'


const app = express()
dotenv.config()


app.use(cors())
app.use(express.json())

const URI = process.env.MONGODB_URI


//connect to mongodb
try {
    mongoose.connect(URI,{
        useNewUrlParser:true,
        UseUnifiedTopology:true
    });
    console.log('Connected to mongodb')
    
} catch (error) {
    console.log("Mongodb connection error!!" + error)
    
}

//define route

app.use("/User",UserRoute)
app.use("/login",UserRoute)



app.listen(process.env.PORT , ()=>{
    console.log("Your Server is running at "+ process.env.PORT)
})