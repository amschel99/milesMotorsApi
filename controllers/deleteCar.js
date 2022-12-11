 import carsModel from '../models/cars.js'
 export const deleteCar= async (req,res)=>{
const{_id}=req.params
    try{
        
        const car = await carsModel.findOneAndDelete({"_id":_id});

        console.log(car)
        res.json({"message":"destroyed", "data":car});
       

    }
    catch(e){
        return null

    }
 }
 