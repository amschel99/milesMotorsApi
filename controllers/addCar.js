 import carsModel from '../models/cars.js'
 export const addCar= async ()=>{

    try{

const car=carsModel.create(req.body);
  return res.status(201).json({message:"car created succesfully", car})
    }
    catch(error){
return res.status(500).send(`there was an error ${error.message}`)
    }
 }