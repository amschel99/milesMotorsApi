import express from 'express'
import {getSingleCar} from "../controllers/getSingleCar.js"
 const router= express.Router();
router.route('/:carId').get(getSingleCar).patch().delete()
export default router
