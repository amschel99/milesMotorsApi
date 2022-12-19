 import carsModel from '../models/cars.js'
 import fs from "fs"

 export const  getAllCars=async  (req,res)=>{
    try{
          const {brand,mileage,bodyStyle,name,numericFilters,user}=req.query
           const queryObject={}
            if(name){
        //the foreign expression below is for pattern matching where all strings matching with the name query are returned. options i is for ignoring thre caps or small

        queryObject.carName={$regex:name, $options:"i"}
    }
    if(mileage){
      queryObject.mileAge=mileage
    }
    if(bodyStyle){
      queryObject.bodyStyle=bodyStyle
    }
     if(user){
      queryObject.user=user
    }
    if(brand){
      queryObject.carType=brand
    }


    //filtering by price

    if (numericFilters) {
    const operatorMap = {
      '>': '$gt',
      '>=': '$gte',
      '=': '$eq',
      '<': '$lt',
      '<=': '$lte',
    };
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    const options = ['price'];
    filters = filters.split(',').forEach((item) => {
      const [field, operator, value] = item.split('-');
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }
        const {dataAmount}=req.params
        let data;
        
      if(dataAmount){
data= await carsModel.find(queryObject).limit(Number(dataAmount)).stream();
      }
      else{
        data= await carsModel.find(queryObject).stream()
      }
//tried streaming, I don't know if its going to work
let results=[]
data.on('error',(error)=>{
  console.log(error)
})
data.on("data",(document)=>{
results.push(document)
})

data.on('end',()=>{
  res.json(results)
})

   

    //console.log(req.params)
    //res.status(200).json(data)

    }
    catch(error){
        console.log(error)
        return 1;

    }

}