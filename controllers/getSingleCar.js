 import carsModel from '../models/cars.js'
 export const getSingleCar= async (req,res)=>{
const{_id}=req.params
    try{
       
        const car = await carsModel.findOne({"_id":_id});

        console.log(car)
        res.json({"message":"Ok", "data":car});
       

    }
    catch(e){
        console.log(e)
        return null

    }
 }
 