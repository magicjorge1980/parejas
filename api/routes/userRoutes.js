import express from 'express'

import registerUserHandler from '../handlers/registerUserHandler.js'
import loginUserHandler from '../handlers/loginUserHandler.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('users')
})

router.post('/register', registerUserHandler)

router.post('/login', loginUserHandler)

export default router
