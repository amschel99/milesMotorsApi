 import usersModel from '../models/user.js'
 export const getSeller= async (req,res)=>{
const{userId}=req.params
    try{
        console.log(userId)
        const user = await usersModel.findOne({"_id":userId});

        //console.log(user)
       res.json(user)// we can get user.email
       

    }
    catch(e){
        console.log(e)
        return null

    }
 }
 