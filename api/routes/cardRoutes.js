import express from 'express'

import createCardHandler from '../handlers/createCardHandler.js'
import authRequired from '../middlewares/validateToken.js'
import { isAdmin } from '../middlewares/isAdmin.js'
import deleteCardHandler from '../handlers/deleteCardHandler'

const router = express.Router()

router.post('/create-card', authRequired, isAdmin, createCardHandler)

router.delete('/delete-card/:cardId', authRequired, isAdmin, deleteCardHandler)

export default router
