import express from 'express'
import {getSeller} from '../controllers/getSeller.js'
 const router= express.Router();
 router.route("/:userId").get(getSeller)


export default router
