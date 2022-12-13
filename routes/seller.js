import express from 'express'
import {getSeller} from '../controllers/getSeller.js'
import {updateUser} from "../controllers/updateUser.js"
 const router= express.Router();
 router.route("/:userId").get(getSeller).patch(updateUser)


export default router
