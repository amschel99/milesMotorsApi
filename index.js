
import express from 'express'
import dotenv from 'dotenv'
import connectDb from './db/config.js'
import carsRouter from "./routes/cars.js"
import carRouter from "./routes/car.js"
import auth from "./routes/auth.js"
import seller from './routes/seller.js'
import cors from 'cors'
import bodyParser from 'body-parser'
import path from 'path'
 import crypto from 'crypto'
 import multer from 'multer'
 import GridFsStorage from 'multer-gridfs-storage'
 import Grid from 'gridfs-stream'
 import methodOverride from 'method-override'
dotenv.config()

const app= express()


const PORT= process.env.PORT || 8000
app.use(methodOverride(_method))
app.use( bodyParser.json({limit: '50mb'}) );
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit:50000
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

let gfs;
const start= async  ()=>{

try{
const connn= await connectDb(process.env.MONGO_URI,{

})

connn.once("open",()=>{ 
    gfs=Grid(connn.db,mongoose.mongo)
   gfs.collection("uploads")

}

)




app.listen(PORT, ()=>{
console.log("server running on "+ PORT)


})

}
catch(error){
    console.log(error)

}

}

//create the storage engine
const storage=new GridFsStorage(
    {
        url:process.env.MONGO_URI,
        file:(req,file)=>{
            return new Promise((resolve,reject)=>{
crypto.randomBytes(16,(err,buffer)=>{
    if(err){
        reject(err)
    }
    const fileName=buf.toString('hex')+ path.extname(file.originalname)
    const fileInfo={
        filename:fileName,
        bucketName:'uploads'
    };
    resolve(fileInfo)
})
            })
        }
    }
)
const upload= multer({storage});
//the name files must match the name of the input file
app.post('/upload',upload.array('files',5),(req,res)=>{
const file=req.file
res.json(file)
})
start()