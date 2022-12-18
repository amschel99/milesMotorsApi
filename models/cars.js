
import mongoose from 'mongoose'
const carsSchema= new mongoose.Schema(
    {
        carID:{
            type:String,
            required:[true,"name must be provided please"],
            trim:true
      
        },
        carName:{
            type:String,
            required:[true,"name must be provided please"],
            trim:true
      
        },
        //car type is same as brand. It was meant to mean brand

        carType:{
            type:String,
            required:[true, "car type must be provided"]
        },
        
        carImg:{
            type:Buffer,
            required:[true, " a product must have an Image"]
        },
       
        image2:{
              type:Buffer,
        },
       
        image3:{
              type:Buffer,
        },
       
        image4:{
              type:Buffer,
        },
       
        image5:{
              type:Buffer,
        },
        image6:{
            type:Buffer,
        },
        image7:{
           type:Buffer,
        },
        image8:{
             type:Buffer,
        },
        image9:{
             type:Buffer,
        },
        image10:{
             type:Buffer,
        },
        color: {
            type: String,
        },

        transmission:{
            type: String,
            required:[true, "specify the transimission"]
        },
        
        fuel:{
        type:String,
         
        },
        bodyStyle:{
            type:String,

        },
        engine:{
            type:String,
        },
       mileage:{
            type:String,
        },
        cubicCentimeters:{
            type: String,
          
        },
        price:{
            type:Number,
        },
        description:{

            type:String
        },
        user:{
          type: String,
          unique:false
        

        }
    }
)
export default  mongoose.model("CarsModel",carsSchema  )