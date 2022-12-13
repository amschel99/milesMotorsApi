 import usersModel from '../models/user.js'
 export const updateUser= async (req,res)=>{
const{userId}=req.params
    try{
        console.log(userId)
        const user = await usersModel.findOneAndUpdate({"_id":userId},req.body);

        console.log(user)
       res.json(user)// we can get user.email
       

    }
    catch(e){
        console.log(e)
        return null

    }
 }
 