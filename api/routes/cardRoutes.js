import express from 'express'
import createCardHandler from '../handlers/createCardHandler.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('cards')
})

router.post('/create-card', createCardHandler)

export default router
