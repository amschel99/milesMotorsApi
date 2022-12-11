
import {registerSchema} from '../validation/validate.js'
import usersModel from "../models/user.js"
import bcrypt from "bcryptjs"


export const register=  async (req, res)=>{
try{
    //Validate the details
    const{error}= registerSchema.validate(req.body)
    if(error){
        return res.send(error.details[0].message)
    }

    //hash the password
    const salt= await bcrypt.genSalt(10)
 
    const hashPassword= await bcrypt.hash(req.body.password,salt)
   req.body.password=hashPassword

    //Check if the user exists in the database
    const userExists= await usersModel.findOne({email:req.body.email})
    if(userExists!==null){
        return res.status(409).send("user already exists" )
    }


   const succesful= await usersModel.create(req.body)
res.json({message:"success", user:succesful})//has user.type and user.name  also

}
catch (error){
    console.log(error)
res.status(500).send("Internal server error" +error)
}
}

export const login =async (req,res)=>{
    try{
  const userExists= await usersModel.findOne({email:req.body.email})
  console.log(userExists)
  res.status(200).send(userExists)// has user.name, user.type

    }catch(error){
        console.log(error)
        return res.status(500).send(`internal server error`)
    }
}




