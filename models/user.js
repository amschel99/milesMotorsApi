
import mongoose from 'mongoose'
const usersSchema= new mongoose.Schema(
    {
      email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
        required: [true, "Email required"]
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
    }
    }
)
export default  mongoose.model("usersModel",usersSchema  )