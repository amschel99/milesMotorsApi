
/*this module cleans up the users collection and the cars selection, be warned before you use it*/
import {cars} from './cars.js'
import connectDb from './db/config.js'
import carsModel from './models/cars.js'
import usersModel from './models/user.js'
import dotenv from 'dotenv'
dotenv.config()

const start= async ()=>{
    
    try{
       
        await connectDb(process.env.MONGO_URI)
        await carsModel.deleteMany()
          await usersModel.deleteMany()
     
console.log("database cleaned up")
process.exit(0)//exit succesfully



    }catch(error){
        console.error(error)
        process.exit(1)
    }
}
start()