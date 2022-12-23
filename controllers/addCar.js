import carsModel from '../models/cars.js'

export const addCar = async (req, res) => {

  try {


    const car = await carsModel.create(req.body);
    console.log(`success`)
    return res.status(201).json({ "code": 1 })
  }
  catch (error) {
    console.log(error)
    return res.status(500).send(`there was an error ${error.message}`)
  }
}