
import mongoose from 'mongoose'
const usersSchema= new mongoose.Schema(
    {
      email: {
        type: String,
       
    },
   password:{
    type:String,
    trim:true,
    required:[true, "password is required"],
    minLength:[8, "password must be atleast 8 characters long"]

   
},
name:{
    type:String
},

    type:{
        type:String,
        enum:['buyer','seller'],
        default:'buyer'

    },
    mobile:{
        type:String
    },
    location:{
        type:String
    },
    description:{
        type:String
    },
  facebook:{
        type:String
    },
    twitter:{
        type:String
    },
    instagram:{
        type:String
    },
    longitude: {
            type: String,

        },
        latitude: {
            type: String
        }
    }
)
export default  mongoose.model("usersModel",usersSchema  )