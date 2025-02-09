import express from 'express'

import registerUserHandler from '../handlers/registerUserHandler.js'
import authUserHandler from '../handlers/authUserHandler.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('users')
})

router.post('/register', registerUserHandler)

router.post('/login', authUserHandler)

export default router
