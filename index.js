
import express from 'express'
import dotenv from 'dotenv'
import connectDb from './db/config.js'
import carsRouter from "./routes/cars.js"
import carRouter from "./routes/car.js"
import auth from "./routes/auth.js"
import seller from './routes/seller.js'
import cors from 'cors'
import bodyParser from 'body-parser'

dotenv.config()

const app= express()


const PORT= process.env.PORT || 8000

app.use( bodyParser.json({limit: '100mb'}) );
app.use(bodyParser.urlencoded({
  limit: '100mb',
  extended: true,
  parameterLimit:100000
}));
app.use(cors({
    origin: '*'
}));

app.use('/cars',carsRouter);
app.use("/car",carRouter);
app.use('/auth',auth);
app.use('/seller', seller);

app.get('/',(req,res)=>{
res.send('All cars API  : developed by Amschel :-) ')
})


const start= async  ()=>{

try{

 await connectDb(process.env.MONGO_URI,{})






app.listen(PORT, ()=>{
console.log("server running on "+ PORT)


})

}
catch(error){
    console.log(error)

}

}


start()