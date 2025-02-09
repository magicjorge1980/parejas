import express from 'express'
import createCardHandler from '../handlers/createCardHandler.js'
import { authRequired } from '../middlewares/validateToken.js'
import { isAdmin } from '../middlewares/isAdmin.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('cards')
})

router.post('/create-card', authRequired, isAdmin, createCardHandler)

export default router
