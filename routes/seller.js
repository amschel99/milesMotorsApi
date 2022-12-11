import express from 'express'
import {getSeller} from '../controllers/getSeller.js'
 const router= express.Router();
 router.route("/:_id").get(getSeller)


export default router
